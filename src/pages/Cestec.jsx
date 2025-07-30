"use client";

import { useState } from "react";

import { cestecData, FaUniversity, FaListAlt } from "@/data/cestecData.js";

import PageLayout from "@/components/PageLayout";
import ImageTextCard from "@/components/ImageTextCard";
import InfoCard from "@/components/InfoCard";

function Cestec() {
  const [activeTabId, setActiveTabId] = useState(cestecData[0].id);

  const activeSection = cestecData.find(
    (section) => section.id === activeTabId
  );

  const handleCategoryClick = (categoryId) => {
    if (cestecData.some((section) => section.id === categoryId)) {
      setActiveTabId(categoryId);
    }
  };

  return (
    <PageLayout
      title="CESTEC"
      subtitle="Suporte Técnico Especializado"
      cardBgColor="bg-white"
      backgroundImage="/fundocestec.jpg"
    >
      <div className="space-y-8 md:space-y-12">
        <ImageTextCard
          imageUrl="/cestec.jpeg"
          imageAlt="Serviços Técnicos CESTEC"
        >
          <h3 className="font-bold text-xl md:text-2xl text-[#0f8d6b] mb-4 tracking-wide">
            SERVIÇOS TÉCNICOS
          </h3>
          <ul className="space-y-2">
            {cestecData.map((category) => {
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
          title="DETALHAMENTO DOS SERVIÇOS"
          className="text-[#0f8d6b]"
          icon={FaUniversity}
        >
          <div className="flex flex-wrap gap-2 border-b border-gray-300 pb-4 mb-6">
            {cestecData.map((section) => (
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

          <div className="animate-fadeIn min-h-[200px]">
            {activeSection && (
              <div>
                <h4 className="font-semibold text-xl text-[#0f8d6b] mb-4 flex items-center">
                  {activeSection.icon && (
                    <activeSection.icon className="mr-2" />
                  )}
                  {activeSection.title}
                </h4>

                {activeSection.items && (
                  <ul className="list-disc list-inside ml-5 space-y-2 text-gray-800 text-base">
                    {activeSection.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                )}

                {activeSection.subSections && (
                  <div className="mt-2 space-y-4">
                    {activeSection.subSections.map((sub, subIdx) => (
                      <div key={subIdx}>
                        <p className="flex items-center font-semibold text-gray-900">
                          <sub.icon className="mr-2 text-[#0f8d6b]" />{" "}
                          {sub.name}
                        </p>
                        <p className="pl-7 text-sm text-gray-600">
                          {sub.details}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="text-center mt-10 pt-6 border-t border-gray-300">
            <a
              href="/contato"
              className="bg-[#0f8d6b] hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center gap-2"
            >
              <FaListAlt />
              Fale Conosco para Mais Detalhes
            </a>
          </div>
        </InfoCard>
      </div>
    </PageLayout>
  );
}

export default Cestec;
