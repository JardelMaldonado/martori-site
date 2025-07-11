"use client";

import { Toaster } from "react-hot-toast";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function Providers({ children }) {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!recaptchaKey) {
    console.warn(
      "A chave do site reCAPTCHA não foi encontrada. Verifique seu arquivo .env.local."
    );

    return <>{children}</>;
  }

  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
        <Toaster position="top-right" />

        {children}
      </GoogleReCaptchaProvider>
    </>
  );
}
