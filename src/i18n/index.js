import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

// Import your translation files
import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";
import fa from "./locales/fa/translation.json";

i18n.use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fr: { translation: fr },
            fa: { translation: fa },
        },
        fallbackLng: "en",
        lng: localStorage.getItem("language") || "en", // Set the initial language from localStorage
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
