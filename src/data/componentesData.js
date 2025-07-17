import {
  FaTags,
  FaMicrochip,
  FaCogs,
  FaBolt,
  FaBroadcastTower,
  FaPlug,
  FaTools,
  FaListAlt,
  FaQuestionCircle,
} from "react-icons/fa";

export const componentesData = [
  {
    id: "resistores",
    title: "RESISTORES & POTENCIOMETROS",
    icon: FaTags,
    items: [
      "TOLERÂNCIA 1%: 1R A 10M, 25/50/100 PPM, 0.25 A 5 WATTS",
      "TOLERÂNCIA 5%: 1R A 100M, 0.50 A 100 WATTS",
      "RESISTORES ENCAPSULADOS E COM DISSIPADORES",
      "POTENCIÔMETROS DE CARBONO, DE FIO E MULTIVOLTAS",
    ],
  },
  {
    id: "capacitores",
    title: "CAPACITORES",
    icon: FaMicrochip,
    items: [
      "CERÂMICO (SMD E PTH)",
      "ELETROLÍTICO (RADIAL, AXIAL, SNAP-IN)",
      "POLIÉSTER",
      "TÂNTALO",
    ],
  },
  {
    id: "indutores",
    title: "INDUTORES & TRANSFORMADORES",
    icon: FaCogs,
    items: [
      "INDUTORES DE POTÊNCIA",
      "INDUTORES DE RF",
      "TRANSFORMADORES PARA FONTES E ÁUDIO",
    ],
  },
  {
    id: "diodos",
    title: "DIODOS, DIACS, TRIACS, TIRISTORES",
    icon: FaBolt,
    items: [
      "DIODOS RETIFICADORES",
      "DIODOS ZENER",
      "DIODOS DE SINAL",
      "COMPONENTES DE POTÊNCIA ATÉ 100A (COM DISSIPADORES)",
    ],
  },
  {
    id: "opto",
    title: "OPTOELETRÔNICOS",
    icon: FaBroadcastTower,
    items: [
      "LEDS DE ALTO BRILHO E PADRÃO",
      "DISPLAYS DE 7 SEGMENTOS",
      "ACOPLADORES ÓPTICOS",
    ],
  },
  {
    id: "transistores",
    title: "TRANSISTORES",
    icon: FaMicrochip,
    items: [
      "BIPOLARES (BJT)",
      "MOSFETS DE POTÊNCIA",
      "TRANSISTORES PARA ÁUDIO E RF",
    ],
  },
  {
    id: "integrados",
    title: "INTEGRADOS DIGITAIS & ANALÓGICOS",
    icon: FaMicrochip,
    items: [
      "FAMÍLIA LÓGICA TTL E CMOS",
      "AMPLIFICADORES OPERACIONAIS",
      "REGULADORES DE TENSÃO",
      "MICROCONTROLADORES",
    ],
  },
  {
    id: "conectores",
    title: "CONECTORES & COMPLEMENTOS",
    icon: FaPlug,
    items: [
      "CONECTORES DE ÁUDIO (P2, P10, XLR)",
      "CONECTORES DE VÍDEO (RCA, BNC)",
      "BORNES, TERMINAIS, SOQUETES PARA CIS",
    ],
  },
      {
        id: "assessoria",
        title: "ASSESSORIA TÉCNICA",
        icon: FaQuestionCircle,
        items: ["NA ESPECIFICAÇÃO, COMPRA OU TROCA DE COMPONENTES ELETRÔNICOS."],
      },
];

export { FaTools, FaListAlt };
