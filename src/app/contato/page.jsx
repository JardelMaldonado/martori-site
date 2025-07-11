import Contato from '@/pages/Contato';

// 2. Adicione os metadados de SEO para ESTA página
export const metadata = {
  title: 'Contato - Martori Eletro Eletrônica',
  description: 'Oferecemos uma vasta gama de instrumentos de medição, controle, teste e produção. Confira nossas soluções.',
};

// 3. Crie e exporte o componente da página
export default function ContatoPage() {
  return (
    <Contato />
  );
}