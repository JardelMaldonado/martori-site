import React from "react";

import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const contactDetails = [
    {
      icon: FaPhone,
      iconClasses: "text-black text-2xl",
      text: "(31) 99128-3600",
      ariaLabel: "Telefone",
    },
    {
      icon: FaWhatsapp,
      iconClasses: "text-[#0f8d6b] text-2xl",
      text: "(31) 98106-0095",
      href: "https://wa.me/5531981060095",
      linkClasses:
        "hover:underline text-black font-semibold hover:text-[#0f8d6b] transition-colors duration-300",
      ariaLabel: "WhatsApp",
    },
    {
      icon: FaEnvelope,
      iconClasses: "text-[#6d83ff] text-2xl",
      text: "contatomartori@gmail.com",
      href: "mailto:contatomartori@gmail.com",
      linkClasses:
        "hover:underline text-black font-semibold hover:text-[#6d83ff] transition-colors duration-300",
      ariaLabel: "Endereço de e-mail",
    },
  ];

  return (
    <footer className="bg-[#c9c9c9] py-8 px-4 text-black text-center w-full">
      <div className="max-w-lg mx-auto">
        <div className="space-y-3 mb-8">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="flex justify-center items-center space-x-3"
            >
              <detail.icon className={detail.iconClasses} aria-hidden="true" />

              {detail.href ? (
                <a
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={detail.linkClasses + " text-lg"}
                  aria-label={`${detail.ariaLabel}: ${detail.text}`}
                >
                  {detail.text}
                </a>
              ) : (
                <span
                  className="text-black font-semibold text-lg"
                  aria-label={`${detail.ariaLabel}: ${detail.text}`}
                >
                  {detail.text}
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="text-sm font-semibold text-black">
          Martori Eletro Eletrônica &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
