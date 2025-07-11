import {
  FaTachometerAlt,
  FaToggleOn,
  FaVial,
  FaIndustry,
  FaPuzzlePiece,
  FaQuestionCircle,
  FaTools,
  FaListAlt,
} from "react-icons/fa";

export const instrumentosData = [
  {
    id: "medicao",
    title: "INSTRUMENTOS DE MEDIÇÃO",
    icon: FaTachometerAlt,
    items: [
      "OSCILOSCÓPIOS, MULTÍMETROS",
      "VOLTÍMETROS, AMPERÍMETROS",
      "MICROSCOPIOS, ESPECTROFOTÔMETROS",
      "DETERMINADORES",
    ],
  },
  {
    id: "controle",
    title: "INSTRUMENTOS DE CONTROLE",
    icon: FaToggleOn,
    items: ["CONTROLADORES PID", "MICROPROCESSADORES"],
  },
  {
    id: "teste",
    title: "INSTRUMENTOS DE TESTE",
    icon: FaVial,
    items: [
      "PARA COMPONENTES ELETRÔNICOS, PHMETROS, TERMÔMETROS",
      "COLORÍMETROS, ESPECTROFOTÔMETROS, ETC.",
    ],
  },
  {
    id: "producao",
    title: "INSTRUMENTOS DE PRODUÇÃO",
    icon: FaIndustry,
    items: ["SENSORES, MEDIDORES"],
  },
  {
    id: "acessorios",
    title: "ACESSÓRIOS",
    icon: FaPuzzlePiece,
    items: ["PONTAS DE PROVA, CAIXAS / PASTAS DE PROTEÇÃO, ETC."],
  },
  {
    id: "assessoria",
    title: "ASSESSORIA TÉCNICA",
    icon: FaQuestionCircle,
    items: ["NA ESPECIFICAÇÃO, COMPRA OU TROCA DE INSTRUMENTOS."],
  },
];

export { FaTools, FaListAlt };
