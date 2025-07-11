import {
  FaBalanceScale,
  FaToggleOn,
  FaFlask,
  FaIndustry,
  FaTools,
  FaPaperclip,
  FaSolarPanel,
  FaQuestionCircle,
} from "react-icons/fa";

export const maquinasData = [
  {
    id: "medicao",
    title: "MEDIÇÃO",
    icon: FaBalanceScale,
    items: ["BALANÇAS ELETRÔNICAS & MECÂNICAS"],
  },
  {
    id: "controle",
    title: "CONTROLE",
    icon: FaToggleOn,
    items: ["CONTROLADORES, SENSORES, ETC."],
  },
  {
    id: "teste",
    title: "TESTE",
    icon: FaFlask,
    items: ["CÂMARA CLIMÁTICA"],
  },
  {
    id: "producao",
    title: "PRODUÇÃO",
    icon: FaIndustry,
    items: [
      "AGITADORES, AQUECEDORES, BANHOS MARIA, BOMBAS DE VÁCUO",
      "CENTRIFUGAS, ESTUFAS, FORNOS, MOINHOS",
      "PURIFICADORES DE ÁGUA, COLETORES DE PÓ, MISTURADORES DE SÓLIDOS",
      "SELADORAS, DESTILADORES, ETC.",
    ],
  },
  {
    id: "manutencao",
    title: "MANUTENÇÃO",
    icon: FaTools,
    items: [
      "FURADEIRA, LIXADEIRA, COMPRESSOR DE AR, SERRA CIRCULAR",
      "MOTORES ELÉTRICOS, MOTORES DE COMBUSTÍVEL LÍQUIDO, ETC.",
    ],
  },
  {
    id: "fotovoltaicos",
    title: "FOTOVOLTAICOS",
    icon: FaSolarPanel,
    items: ["PAINÉIS, INVERSORES, CONTROLADORES DE CARGA"],
  },
  {
    id: "implementos",
    title: "IMPLEMENTOS",
    icon: FaPaperclip,
    items: ["MANGUEIRAS, TORNEIRAS, PAPEL FILTRANTE, FILTRO DE ÁGUA"],
  },
  {
    id: "assessoria",
    title: "ASSESSORIA TÉCNICA",
    icon: FaQuestionCircle,
    items: ["NA ESPECIFICAÇÃO, COMPRA OU TROCA DE MÁQUINAS & EQUIPAMENTOS."],
  },
];
