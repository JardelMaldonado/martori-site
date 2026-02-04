"use client";
import { useState } from 'react';

import { componentesData, FaTools, FaListAlt } from "@/data/componentesData.js";

import PageLayout from "@/components/PageLayout";
import ImageTextCard from "@/components/ImageTextCard";
import InfoCard from "@/components/InfoCard";



function ComponentesEletronicos() {
  const [activeTabId, setActiveTabId] = useState(componentesData[0].id);

  const activeSection = componentesData.find(
    (section) => section.id === activeTabId
  );

  const handleCategoryClick = (categoryId) => {
    if (componentesData.some((section) => section.id === categoryId)) {
      setActiveTabId(categoryId);
    }
  };

  return (
    <PageLayout
      title="COMPONENTES ELETRÔNICOS"
      subtitle="Consultoria & Comercialização"
      cardBgColor="bg-slate-100"
      backgroundImage="/fundocomponents.jpeg"
    >
      <div className="space-y-8 md:space-y-12">
        <ImageTextCard
          imageUrl="/componentes.jpeg"
          imageAlt="Componentes Eletrônicos Diversos"
        >
          <h3 className="font-semibold text-lg md:text-xl text-[#d32c2c] mb-4 p-3 md:whitespace-nowrap ">
            NÃO FORNECEMOS COMPONENTES PARA ELETRODOMÉSTICOS
          </h3>

          <ul className="space-y-2 mt-6">
            {componentesData.map((category) => {
              const isActive = activeTabId === category.id;

              const itemClasses = `flex items-center text-md md:text-lg p-2 rounded-md transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-white shadow-sm font-semibold text-[#0f8d6b]"
                  : "text-gray-700 hover:bg-white/60 hover:pl-4"
              }`;

              return (
                <li
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={itemClasses}
                >
                  <category.icon className="mr-3 text-[#0f8d6b] flex-shrink-0" />
                  <span className="uppercase">{category.title}</span>
                </li>
              );
            })}
          </ul>
        </ImageTextCard>

        <InfoCard
          title="CATÁLOGO DE COMPONENTES"
          className="text-[#0f8d6b]"
          icon={FaTools}
        >
          <div className="flex flex-wrap gap-2 border-b border-gray-300 pb-4 mb-6">
            {componentesData.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTabId(section.id)}
                className={`uppercase px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
                  activeTabId === section.id
                    ? "bg-[#0f8d6b] text-white"
                    : "bg-white hover:bg-gray-100 text-gray-700 border border-gray-300"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          <div className="animate-fadeIn min-h-[150px]">
            {activeSection && (
              <div>
                <h4 className="font-semibold text-xl text-[#0f8d6b] mb-3 flex items-center uppercase">
                  {activeSection.icon && (
                    <activeSection.icon className="mr-2" />
                  )}
                  {activeSection.title}
                </h4>
                <ul className="list-disc list-inside ml-5 space-y-2 text-gray-800 text-base">
                  {activeSection.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="uppercase">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="text-center mt-10 pt-6 border-t border-gray-300">
            <a
              href="/contato"
              className="bg-[#0f8d6b] hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center gap-2"
            >
              <FaListAlt />
              Consulte Lista de Material Disponível
            </a>
          </div>
        </InfoCard>
      </div>
    </PageLayout>
  );
}

export default ComponentesEletronicos;
