import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es"); // Default language is Spanish

  const toggleLanguage = () => {
    setLanguage((currentLang) => {
      console.log(currentLang);

      if (currentLang === "es") return "es";
      if (currentLang === "en") return "en";
      if (currentLang === "pt") return "pt";
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
