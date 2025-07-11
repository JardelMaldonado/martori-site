"use client";

import { createContext, useContext } from "react";

const ThemeContext = createContext({ cardBgColor: "bg-white" });

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext.Provider;
