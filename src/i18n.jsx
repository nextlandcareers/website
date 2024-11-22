import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locals/en/translation.json";
import hn from "./locals/hn/translation.json";
import gr from "./locals/gr/translation.json";
import sl from "./locals/sl/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hn: { translation: hn },
    gr: { translation: gr },
    sl: { translation: sl },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
