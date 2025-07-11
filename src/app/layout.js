import "./globals.css";

import { Inter } from "next/font/google";

import NavBar from "@/layouts/NavBar";
import Footer from "@/layouts/Footer";

import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Martori Eletro Eletrônica",
  description:
    "Soluções em componentes, instrumentos, ferramentas e serviços eletroeletrônicos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gray-100`}
      >
        <Providers>
          <NavBar />

          <main className="flex-grow">{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
