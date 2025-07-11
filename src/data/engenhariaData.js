import {
  FaExchangeAlt,
  FaBoxes,
  FaMicrochip,
  FaPuzzlePiece,
  FaUserTie,
  FaCogs,
  FaHandshake,
  FaClipboardList,
} from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

export const engenhariaData = [
  {
    id: "reposicao",
    title: "REPOSIÇÃO DE COMPONENTES DESCONTINUADOS",
    icon: FaExchangeAlt,
    items: [
      "ANÁLISE DE CIRCUITOS PARA ENCONTRAR SUBSTITUTOS MODERNOS E COMPATÍVEIS.",
      "ADAPTAÇÃO DE PROJETOS LEGADOS PARA NOVOS COMPONENTES.",
      "HOMOLOGAÇÃO DE PEÇAS ALTERNATIVAS PARA PRODUÇÃO.",
    ],
  },
  {
    id: "conjuntos",
    title: "CONJUNTOS DE COMPONENTES MODULADOS",
    icon: FaBoxes,
    items: [
      "CRIAÇÃO DE KITS DE COMPONENTES PARA PROJETOS ESPECÍFICOS OU LINHAS DE PRODUÇÃO.",
      "ORGANIZAÇÃO E FORNECIMENTO DE MÓDULOS PRÉ-MONTADOS PARA OTIMIZAR A MONTAGEM.",
    ],
  },
  {
    id: "hibridos",
    title: "COMPONENTES & CIRCUITOS HÍBRIDOS",
    icon: FaMicrochip,
    items: [
      "DESENVOLVIMENTO DE SOLUÇÕES QUE INTEGRAM DIFERENTES TECNOLOGIAS.",
      "PROJETO DE CIRCUITOS COM COMPONENTES DISCRETOS E INTEGRADOS PARA PERFORMANCE OTIMIZADA.",
    ],
  },
  {
    id: "diversos",
    title: "COMPONENTES ELETROELETRÔNICOS DIVERSOS",
    icon: FaPuzzlePiece,
    items: [
      "FORNECIMENTO DE UMA VASTA GAMA DE COMPONENTES PARA PROTOTIPAGEM E PRODUÇÃO.",
      "CURADORIA DE PEÇAS PARA APLICAÇÕES INDUSTRIAIS E PROFISSIONAIS.",
    ],
  },
  {
    id: "assessoria",
    title: "ASSESSORIA TÉCNICA NA COMPRA / VENDA & APLICAÇÃO",
    icon: FaUserTie,
    items: [
      "ORIENTAÇÃO ESPECIALIZADA PARA A MELHOR ESCOLHA DE COMPONENTES E EQUIPAMENTOS.",
      "ANÁLISE DE CUSTO-BENEFÍCIO E PERFORMANCE PARA SUAS AQUISIÇÕES.",
    ],
  },
  {
    id: "integracao",
    title: "INTEGRAÇÃO DE SISTEMAS INSTRUMENTAIS",
    icon: FaCogs,
    items: [
      "CONEXÃO DE DIFERENTES INSTRUMENTOS E SENSORES EM UM SISTEMA COESO.",
      "DESENVOLVIMENTO DE SOFTWARE E HARDWARE PARA AQUISIÇÃO E PROCESSAMENTO DE DADOS.",
    ],
  },
  {
    id: "representacao",
    title: "REPRESENTAÇÃO TECNO-COMERCIAL",
    icon: FaHandshake,
    items: [
      "ATUAÇÃO COMO PONTE TÉCNICA E COMERCIAL ENTRE FABRICANTES E CLIENTES.",
      "APRESENTAÇÃO DE NOVAS TECNOLOGIAS E PRODUTOS AO MERCADO.",
    ],
  },
];

export { MdEngineering, FaClipboardList };
