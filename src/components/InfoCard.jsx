import React from "react";

import { useTheme } from "@/context/ThemeContext";

function InfoCard({
  title,
  icon: Icon,
  children,
  titleColor = "text-[#0f8d6b]",
}) {
  const { cardBgColor } = useTheme();

  const cardClasses = `${
    cardBgColor || "bg-white"
  } p-6 md:p-8 rounded-xl shadow-xl`;

  return (
    <div className={cardClasses}>
      {title && (
        <h3
          className={`font-semibold text-xl md:text-2xl ${titleColor} mb-6 flex items-center`}
        >
          {Icon && <Icon className="mr-3 text-2xl" />}
          {title}
        </h3>
      )}

      <div className="space-y-4 text-base md:text-lg text-gray-800">
        {children}
      </div>
    </div>
  );
}

export default InfoCard;
