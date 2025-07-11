"use client";

import { useState, useCallback } from "react";

import FormField from "@/components/FormField";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import toast from "react-hot-toast";

function Contato() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();

            if (!executeRecaptcha) {
                toast.error(
                    "O reCAPTCHA não está pronto. Tente novamente em alguns segundos."
                );
                return;
            }

            setIsSubmitting(true);
            const loadingToastId = toast.loading("Verificando e enviando...");

            const gRecaptchaToken = await executeRecaptcha("contactForm");

            try {
                const response = await fetch("/api/contact", {
                    method: "POST", // Método da requisição.
                    headers: { "Content-Type": "application/json" },

                    body: JSON.stringify({ ...formData, gRecaptchaToken }),
                });

                toast.dismiss(loadingToastId);

                if (response.ok) {
                    toast.success("Mensagem enviada com sucesso! Obrigado.");

                    setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
                } else {
                    const result = await response.json();

                    toast.error(
                        `Falha no envio: ${result.message || "Verifique os dados e tente novamente."
                        }`
                    );
                }
            } catch (error) {
                toast.dismiss(loadingToastId);
                toast.error("Erro de conexão. Por favor, verifique sua internet.");
                console.error("Erro na requisição:", error);
            } finally {
                setIsSubmitting(false);
            }
        },
        [executeRecaptcha, formData]
    );

    return (
        <section className="relative w-full h-full  flex items-center justify-center py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
                style={{ backgroundImage: `url('/fundocontato.jpg')` }}
            />

            <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-8 sm:p-10 rounded-xl shadow-2xl relative z-10 max-w-xl w-full"
            >
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Fale Conosco
                </h2>

                <FormField
                    label="Nome Completo"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="E-mail"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Mensagem"
                    name="mensagem"
                    isTextarea
                    rows={5}
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-[#0f8d6b] text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>
            </form>
        </section>
    );
}

export default Contato;
