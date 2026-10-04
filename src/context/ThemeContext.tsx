"use client";

import React, { createContext, useContext, useEffect } from "react";

type Theme = "dark";

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "dark" });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Default website permanently locked to night / dark mode
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mero-theme", "dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return { theme: "dark" as Theme };
  }
  return context;
}

