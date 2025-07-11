import { sanityClient } from "@/lib/sanityClient";

import { PortableText } from "@portabletext/react";

const query = `*[_type == "assuntoDaSemana"][0]{
  titulo,
  paragrafos
}`;

export default async function AssuntoDaSemana() {
  const assunto = await sanityClient.fetch(query);

  if (!assunto) {
    return (
      <section
        id="assunto-semana"
        className="w-full bg-black/50 py-12 md:py-16 px-6 text-white justify-center flex"
      >
        <div className="container mx-auto text-center">
          <h3 className="font-bold text-3xl mb-4">ASSUNTO DA SEMANA</h3>
          <p className="text-lg text-gray-400">
            Nenhum assunto publicado no momento.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="assunto-semana"
      className="w-full bg-black/50 py-12 md:py-16 px-6 shadow-lg text-white"
    >
      <div className="container mx-auto max-w-3xl xl:max-w-4xl">
        <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center text-white mb-8 md:mb-10 drop-shadow-md">
          {assunto.titulo}
        </h3>

        <div className="prose prose-invert md:text-2xl prose-lg lg:prose-xl mx-auto text-center">
          <PortableText value={assunto.paragrafos} />
        </div>
      </div>
    </section>
  );
}
