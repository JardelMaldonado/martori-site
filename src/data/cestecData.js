import {
  FaUniversity,
  FaTachometerAlt,
  FaBolt,
  FaHardHat,
  FaStore,
  FaGem,
  FaBoxOpen,
  FaBlender,
  FaTools,
  FaCogs,
  FaChair,
  FaListAlt,
  FaWrench,
} from "react-icons/fa";

export const cestecData = [
  {
    id: "instrumentacao",
    title: "INSTRUMENTAÇÃO ELETROELETRÔNICA",
    icon: FaTachometerAlt,
    items: ["MANUTENÇÃO", "ATUALIZAÇÃO / CUSTOMIZAÇÃO"],
  },
  {
    id: "eletrotecnica",
    title: "ELETROTÉCNICA",
    icon: FaBolt,
    items: ["REFORMA & INSTALAÇÃO", "MONTAGENS"],
  },
    {
    id: "Mecanica",
    title: "MECÂNICA DE PRECISÃO",
    icon: FaWrench,
    items: ["MICRO MECÂNICA"],
  },
  {
    id: "construcao",
    title: "CONSTRUÇÃO CIVIL",
    icon: FaHardHat,
    items: ["REFORMA DE INSTALAÇÕES"],
  },
  {
    id: "seminovos",
    title: "COMÉRCIO DE SEMI NOVOS",
    icon: FaStore,
    subSections: [
      {
        name: "ANTIGUIDADES",
        details: "Utensílios, Moedas, Máquinas, Equipamentos",
        icon: FaGem,
      },
      { name: "EMBALAGENS", details: "Frascos de Vidro", icon: FaBoxOpen },
      { name: "ELETRODOMÉSTICOS", details: "Freezer", icon: FaBlender },
      {
        name: "FERRAMENTAS ELÉTRICAS",
        details: "Furadeiras, Lixadeiras, Serras, Compressores, etc.",
        icon: FaTools,
      },
      {
        name: "MÁQUINAS & MOTORES",
        details: "Motosserra, Roçadeira, Motores Diversos",
        icon: FaCogs,
      },
      {
        name: "MÓVEIS & UTENSÍLIOS",
        details:
          "Balcões, Mesas, Cadeiras, Armários, Capelas, Gaveteiros, etc.",
        icon: FaChair,
      },
    ],
  },
];

export { FaUniversity, FaListAlt };
