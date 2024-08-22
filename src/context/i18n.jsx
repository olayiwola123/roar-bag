import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  lazy,
  Suspense,
} from "react";
import Loading from "../components/General/Loading";

// Define context
const I18nContext = createContext();

// Define custom hook to use context
export const useI18n = () => useContext(I18nContext);

// Available languages
const languages = {
  en: () => import("../translations/en/global.json"),
  ar: () => import("../translations/ar/global.json"),
};

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language
  const [translations, setTranslations] = useState(null);

  const changeLanguage = async (lang) => {
    setLanguage(lang);
    // Lazy load the translations for the selected language
    const module = await languages[lang]();
    setTranslations(module.default);
  };

  useEffect(() => {
    changeLanguage("en");
  }, []);

  useEffect(() => {
    // Update HTML lang attribute when language changes
    document.documentElement.lang = language;
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, changeLanguage, translations }}>
      {translations ? (
        <Suspense fallback={<Loading/>}>{children}</Suspense>
      ) : (
        <Loading/>
      )}
    </I18nContext.Provider>
  );
};
