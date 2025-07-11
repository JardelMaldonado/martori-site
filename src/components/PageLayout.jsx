import React from "react";

import ThemeProvider from "@/context/ThemeContext";

function PageLayout({
  title,
  subtitle,
  backgroundImage,
  children,
  cardBgColor = "bg-white",
}) {
  const themeValue = { cardBgColor };

  return (
    <ThemeProvider value={themeValue}>
      <section
        className="w-full min-h-screen bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-black/60 w-full min-h-screen p-6 md:p-10 text-white flex flex-col items-center">
          {title && (
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 text-center uppercase tracking-wider">
              {title}
            </h1>
          )}

          {subtitle && (
            <p className="font-light text-xl md:text-2xl lg:text-3xl text-gray-200 mt-2 text-center tracking-wider">
              {subtitle}
            </p>
          )}

          <div className="w-full max-w-5xl xl:max-w-6xl mt-8 md:mt-12 space-y-8 md:space-y-12">
            {children}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default PageLayout;
