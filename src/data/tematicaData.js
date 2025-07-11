import {
  FaBook,
  FaFlask,
  FaLeaf,
  FaCapsules,
  FaStethoscope,
  FaMicrochip,
  FaWrench,
  FaBookOpen,
  FaListAlt,
} from "react-icons/fa";

export const tematicaData = [
  {
    id: "eletroeletronica",
    title: "ELETROELETRÔNICA",
    icon: FaMicrochip,
    items: [
      "DATA BOOKS DE SEMICONDUTORES",
      "MANUAIS DE SERVIÇO DE EQUIPAMENTOS",
      "ARTIGOS TÉCNICOS SOBRE CIRCUITOS",
      "GUIAS DE APLICAÇÃO DE COMPONENTES",
    ],
  },
  {
    id: "medica",
    title: "MÉDICA",
    icon: FaStethoscope,
    items: [
      "PUBLICAÇÕES SOBRE EQUIPAMENTOS DE DIAGNÓSTICO POR IMAGEM",
      "GUIAS DE CALIBRAÇÃO PARA EQUIPAMENTOS HOSPITALARES",
      "NORMAS TÉCNICAS DO SETOR DE SAÚDE",
    ],
  },
  {
    id: "farmaceutica",
    title: "FARMACÊUTICA",
    icon: FaCapsules,
    items: [
      "LITERATURA SOBRE EQUIPAMENTOS DE LABORATÓRIO",
      "MANUAIS DE BOAS PRÁTICAS DE FABRICAÇÃO (BPF)",
      "COMPÊNDIOS E FARMACOPEIAS",
    ],
  },
  {
    id: "botanica",
    title: "BOTÂNICA",
    icon: FaLeaf,
    items: [
      "GUIAS DE IDENTIFICAÇÃO DE ESPÉCIES",
      "MANUAIS SOBRE EQUIPAMENTOS DE ANÁLISE FOLIAR",
      "TÉCNICAS DE EXTRAÇÃO DE COMPOSTOS",
    ],
  },
  {
    id: "fisicoquimica",
    title: "FÍSICO-QUÍMICA",
    icon: FaFlask,
    items: [
      "ARTIGOS SOBRE CROMATOGRAFIA E ESPECTROMETRIA",
      "MANUAIS DE VISCOSÍMETROS E REÔMETROS",
      "PROTOCOLOS DE ANÁLISE LABORATORIAL",
    ],
  },
  {
    id: "mecanica",
    title: "MECÂNICA",
    icon: FaWrench,
    items: [
      "CATÁLOGOS DE FERRAMENTAS DE PRECISÃO",
      "MANUAIS DE MANUTENÇÃO DE MÁQUINAS INDUSTRIAIS",
      "GUIAS DE MATERIAIS E SUAS PROPRIEDADES",
    ],
  },
  {
    id: "literatura",
    title: "LITERATURA GERAL",
    icon: FaBook,
    items: [
      "LIVROS CLÁSSICOS DE ENGENHARIA E CIÊNCIAS",
      "PUBLICAÇÕES HISTÓRICAS SOBRE TECNOLOGIA",
      "BIOGRAFIAS DE INVENTORES E CIENTISTAS",
    ],
  },
];

export { FaBookOpen, FaListAlt };
