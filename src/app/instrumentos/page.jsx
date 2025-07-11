// Exemplo para: src/app/instrumentos/page.jsx

// 1. Importe o componente da página original
import Instrumentos from '@/pages/Instrumentos';

// 2. Adicione os metadados de SEO para ESTA página
export const metadata = {
  title: 'Instrumentos - Martori Eletro Eletrônica',
  description: 'Oferecemos uma vasta gama de instrumentos de medição, controle, teste e produção. Confira nossas soluções.',
};

// 3. Crie e exporte o componente da página
export default function InstrumentosPage() {
  return (
    <Instrumentos />
  );
}