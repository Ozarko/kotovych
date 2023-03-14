import React, { createContext, FC, useContext, useState } from "react";
import { WithChildren } from "../types/general";
import { Languages, locale } from "../schemas/locale";

const defaultTranslation = {
  currentLanguage: Languages.UA,
  setCurrentLanguage: (language: Languages) => {},
  schema: locale[Languages.UA],
};

const TranslationContext = createContext(defaultTranslation);

export const TranslationProvider: FC<WithChildren> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(Languages.UA);

  return (
    <TranslationContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage,
        schema: locale[currentLanguage],
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
