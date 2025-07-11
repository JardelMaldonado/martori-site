import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { nome, email, assunto, mensagem, gRecaptchaToken } =
      await request.json();

    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },

        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${gRecaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      console.log(
        "Falha na verificação do reCAPTCHA:",
        recaptchaData["error-codes"]
      );
      return NextResponse.json(
        { message: "Falha na verificação de segurança." },
        { status: 403 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${nome}" <${process.env.EMAIL_USER}>`,

      to: "Contatomartori@gmail.com",

      replyTo: email,

      subject: `Nova mensagem do site: ${assunto}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #FFD700; padding: 20px; text-align: center;">
            <img 
              src="https://i.imgur.com/nW4lesT.png" 
              alt="Logo Martori" 
              style="width: 100%; max-width: 450px; height: auto; display: block; margin: auto;"
            />
          </div>
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #0f8d6b; border-bottom: 2px solid #0f8d6b; padding-bottom: 10px;">Nova Mensagem do Site</h2>
            <p>Você recebeu uma nova mensagem através do formulário de contato do site.</p>
            <div style="background-color: #ffffff; padding: 15px; border-radius: 5px; margin-top: 20px; border: 1px solid #eee;">
              <p style="margin: 5px 0;"><strong>Nome:</strong> ${nome}</p>
              <p style="margin: 5px 0;"><strong>E-mail de Contato:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 5px 0;"><strong>Assunto:</strong> ${assunto}</p>
            </div>
            <h3 style="color: #333; margin-top: 20px;">Mensagem:</h3>
            <div style="padding: 15px; border: 1px solid #eee; border-radius: 5px; background-color: #ffffff;">
              <p style="margin: 0;">${mensagem.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
          <div style="background-color: #333; color: #fff; text-align: center; padding: 10px; font-size: 12px;">
            <p>E-mail enviado automaticamente pelo site Martori.</p>
          </div>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);

      return NextResponse.json(
        { message: "E-mail enviado com sucesso!" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);

      return NextResponse.json(
        { message: "Erro ao enviar e-mail.", error: error.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Erro no processamento da requisição:", error);
    return NextResponse.json(
      { message: "Dados inválidos na requisição." },
      { status: 400 }
    );
  }
}
