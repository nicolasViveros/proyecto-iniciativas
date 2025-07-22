import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es"); // Default language is Spanish

  const toggleLanguage = () => {
    setLanguage((currentLang) => {
      if (currentLang === "es") return "en";
      if (currentLang === "en") return "pt";
      return "es"; // default back to Spanish
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
