"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import {
  FaHome,
  FaBars,
  FaTimes,
  FaTools,
  FaWrench,
  FaCogs,
  FaUniversity,
  FaEnvelope,
} from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { MdEngineering } from "react-icons/md";

const navLinksData = [
  { to: "/", text: "Home", icon: FaHome },
  { to: "/componenteseletronicos", text: "Componentes", icon: FaMicrochip },
  { to: "/instrumentos", text: "Instrumentos", icon: FaTools },
  { to: "/maquinas", text: "Máquinas", icon: FaWrench },
  { to: "/ferramentas", text: "Ferramentas", icon: FaCogs },
  { to: "/engenharia", text: "Engenharia", icon: MdEngineering },
  { to: "/tematica", text: "Temática", icon: IoBookOutline },
  { to: "/cestec", text: "CESTEC", icon: FaUniversity },
  { to: "/contato", text: "Contato", icon: FaEnvelope },
];

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="bg-[#c9c9c9] shadow-md">
      <Container>
        <div className="flex justify-between items-center py-4 sm:px-6 lg:px-4">
          <div>
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="Logo da empresa Martori"
                width={700}
                height={100}
                priority
                className="h-auto"
              />
            </Link>
          </div>

          <ul className="hidden md:flex items-center space-x-6 ">
            {navLinksData.map((link) => {
              const isActive = pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className={`flex items-center transition-all duration-200 ${
                      isActive
                        ? "text-black font-semibold underline"
                        : "text-[#0f8d6b] hover:text-black hover:underline"
                    }`}
                  >
                    {link.icon && <link.icon className="mr-1.5" />}
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menu"
              className="text-[#0f8d6b] hover:text-black text-2xl"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col space-y-3 items-center">
              {navLinksData.map((link) => {
                const isActive = pathname === link.to;
                return (
                  <li key={link.to}>
                    <Link
                      href={link.to}
                      className={`flex items-center py-2 transition-all duration-200 w-full justify-center ${
                        isActive
                          ? "text-black font-semibold underline"
                          : "text-[#0f8d6b] hover:text-black hover:underline"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.icon && <link.icon className="mr-2" />}
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </Container>
    </nav>
  );
}

export default NavBar;
