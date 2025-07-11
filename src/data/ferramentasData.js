import {
  FaBolt,
  FaMortarPestle,
  FaWrench,
  FaLeaf,
  FaTools,
  FaListAlt,
} from "react-icons/fa";

export const ferramentasData = [
  {
    id: "eletroeletronico",
    title: "ELETROELETRÔNICO",
    icon: FaBolt,
    items: [
      "CAIXAS, PASTAS, SUPORTES, FERRAMENTAS MECÂNICAS MANUAIS, FERROS DE SOLDA",
    ],
  },
  {
    id: "farmaceutico",
    title: "FARMACÊUTICO",
    icon: FaMortarPestle,
    items: [
      "DESSECADOR, PROVETA, PIPETA, FUNIL, VISCOSÍMETRO",
      "BEQUER, JARRA GRADUADA, BALDE GRADUADO, ALMOFARIZ",
      "PISSETA, BARRAS MAGNÉTICAS, ENCAPSULADORES, FÔRMAS, ELETRODOS DE PH",
    ],
  },
  {
    id: "mecanico",
    title: "MECÂNICO",
    icon: FaWrench,
    items: [
      "BROCAS, ESPÁTULAS, ELETRODOS ESPECIAIS DE SOLDA, BASTÕES DE VIDRO",
    ],
  },
  {
    id: "botanico",
    title: "BOTÂNICO",
    icon: FaLeaf,
    items: ["FERRAMENTAL EM AÇO ZINCADO & INOX"],
  },
];

export { FaTools, FaListAlt };
