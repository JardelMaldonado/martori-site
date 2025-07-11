import PromocaoCard from "@/components/PromocaoCard";

import { sanityClient } from "@/lib/sanityClient";

export const revalidate = 60;

const descricoesQuery = `*[_type == "descricoesPromocoes"][0]`;

export default async function Promocoes() {
  const descricoesSanity = await sanityClient.fetch(descricoesQuery);

  const promocoesFixas = [
    {
      id: "Instrumentos",
      titulo: "Instrumentos de Medição",
      imagemUrl: "/promocao1.jpeg",
      link: "https://wa.me/5531991283600?text=Olá!%20Tenho%20interesse%20em%20instrumentos%20eletrônicos.",
    },
    {
      id: "Componentes",
      titulo: "Componentes Eletrônicos",
      imagemUrl: "/promocao2.jpeg",
      link: "https://wa.me/5531991283600?text=Olá!%20Tenho%20interesse%20em%20componentes%20eletrônicos.",
    },
    {
      id: "Ferramental",
      titulo: "Ferramental e Acessórios",
      imagemUrl: "/promocao3.jpeg",
      link: "https://wa.me/5531991283600?text=Olá!%20Tenho%20interesse%20em%20ferramental%20e%20acessórios.",
    },
  ];

  return (
    <section id="promocoes" className="bg-black/50 w-full py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 text-white">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-10 md:mb-16">
          PROMOÇÕES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {promocoesFixas.map((promo) => (
            <PromocaoCard
              key={promo.id}
              title={promo.titulo}
              imageUrl={promo.imagemUrl}
              link={promo.link}
              description={descricoesSanity?.[`descricao${promo.id}`]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
