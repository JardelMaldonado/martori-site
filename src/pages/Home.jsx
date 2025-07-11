import Promocoes from "../components/Promocoes";
import AssuntoDaSemana from "../components/AssuntoDaSemana";

import { FaExclamationTriangle } from "react-icons/fa";

function Home() {
  return (
    <section
      className="w-full flex flex-col justify-center bg-cover bg-center py-0 bg-no-repeat text-black "
      style={{ backgroundImage: `url('/fundohome.jpg')` }}
    >
      <div className="bg-black/50 w-full text-white p-8 md:p-10 text-center flex flex-col items-center">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
          BEM-VINDO
        </h1>

        <p className="text-base md:text-2xl leading-relaxed max-w-4xl">
          Após atuar na área por 35 anos, comercializando componentes e
          instrumentos eletrônicos, ferramentas para eletroeletrônica e
          serviços, na região de Belo Horizonte, Minas Gerais, estamos
          expandindo e aprimorando este atendimento personalizado com a criação
          deste site. Desejamos com isto facilitar o acesso dos interessados a
          nossa consultoria, comercialização e serviços em eletroeletrônicos de
          maneira rápida e objetiva. Tudo que podemos oferecer está descrito de
          maneira simples e clara. Caso o interessado necessite de informações
          complementares, poderá fazê-lo através de uma consulta técnica ou
          comercial sem custo e isenta de compromisso futuro.
        </p>

        <span className="font-semibold block mt-3 md:text-2xl">
          Eng. Ricardo Torres Martins
        </span>

        <div className="mt-12 pt-8 border-t border-gray-500/50 w-full max-w-3xl">
          <h2 className="font-bold text-2xl md:text-3xl mb-3 text-white flex items-center justify-center gap-3">
            <FaExclamationTriangle className="text-yellow-400" />
            NÃO SOMOS LOJA
          </h2>

          <p className="font-semibold md:text-2xl text-gray-200">
            Nosso foco é a prestação de serviços técnicos, consultoria e
            fornecimento especializado sob demanda.
          </p>
        </div>
      </div>

      <Promocoes />
      <AssuntoDaSemana />
    </section>
  );
}

export default Home;
