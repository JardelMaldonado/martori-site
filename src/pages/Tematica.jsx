"use client";

import { useState } from "react";

import { tematicaData, FaBookOpen, FaListAlt } from "@/data/tematicaData.js";

import PageLayout from "@/components/PageLayout";
import ImageTextCard from "@/components/ImageTextCard";
import InfoCard from "@/components/InfoCard";

function Tematica() {
  const [activeTabId, setActiveTabId] = useState(tematicaData[0].id);

  const activeSection = tematicaData.find(
    (section) => section.id === activeTabId
  );

  const handleCategoryClick = (categoryId) => {
    if (tematicaData.some((section) => section.id === categoryId)) {
      setActiveTabId(categoryId);
    }
  };

  return (
    <PageLayout
      title="TEMÁTICA"
      subtitle="Consultas & Comercialização"
      cardBgColor="bg-slate-100"
      backgroundImage="/fundotematica.jpg"
    >
      <div className="space-y-8 md:space-y-12">
        <ImageTextCard
          imageUrl="/tematica.jpeg"
          imageAlt="Livros e material técnico"
        >
          <h3 className="font-bold text-xl md:text-2xl text-[#0f8d6b] mb-4 tracking-wide">
            BIBLIOTECA TÉCNICA
          </h3>

          <ul className="space-y-2">
            {tematicaData.map((category) => {
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
                  {category.title}
                </li>
              );
            })}
          </ul>
        </ImageTextCard>

        <InfoCard
          title="ÁREAS DO ACERVO"
          className="text-[#0f8d6b]"
          icon={FaBookOpen}
        >
          <div className="flex flex-wrap gap-2 border-b border-gray-300 pb-4 mb-6">
            {tematicaData.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTabId(section.id)}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
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
                <h4 className="font-semibold text-xl text-[#0f8d6b] mb-3 flex items-center">
                  {activeSection.icon && (
                    <activeSection.icon className="mr-2" />
                  )}
                  {activeSection.title}
                </h4>
                <ul className="list-disc list-inside ml-5 space-y-2 text-gray-800 text-base">
                  {activeSection.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
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
              Consulte Index de Material Disponível
            </a>
          </div>
        </InfoCard>
      </div>
    </PageLayout>
  );
}

export default Tematica;
