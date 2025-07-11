import React from "react";

import { useTheme } from "@/context/ThemeContext";

function ImageTextCard({ imageUrl, imageAlt, children, reverseOrder = false }) {
  const { cardBgColor } = useTheme();

  const containerClasses = `
    ${cardBgColor || "bg-white"} 
    text-black p-6 md:p-8 rounded-xl shadow-xl 
    flex flex-col gap-6 md:gap-8 items-stretch 
    ${reverseOrder ? "md:flex-row-reverse" : "md:flex-row"}
  `;

  return (
    <div className={containerClasses}>
      {imageUrl && (
        <div className="w-full md:w-1/3 lg:w-2/5 flex-shrink-0">
          <img
            src={imageUrl}
            alt={imageAlt || "Imagem descritiva"}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}

      <div className="w-full md:w-2/3 lg:w-3/5">{children}</div>
    </div>
  );
}

export default ImageTextCard;
