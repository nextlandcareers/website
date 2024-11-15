import React, { useEffect, useRef, useState } from "react";
import "./translate.css";

const Translate = () => {
  const googleTranslateRef = useRef(null);
  const [language, setLanguage] = useState(null);
  const [isLocation, setIsLocation] = useState(false);

  const countryToLanguageMap = {
    AF: "af", // Afrikaans (South Africa)
    ET: "am", // Amharic (Ethiopia)
    AE: "ar", // Arabic (United Arab Emirates)
    BD: "bn", // Bengali (Bangladesh)
    BG: "bg", // Bulgarian (Bulgaria)
    CA: "ca", // Catalan (Andorra/Spain)
    CZ: "cs", // Czech (Czech Republic)
    DK: "da", // Danish (Denmark)
    DE: "de", // German (Germany)
    GR: "el", // Greek (Greece)
    US: "en", // English (United States)
    GB: "en", // English (United Kingdom)
    ES: "es", // Spanish (Spain)
    MX: "es", // Spanish (Mexico)
    IR: "fa", // Persian/Farsi (Iran)
    FI: "fi", // Finnish (Finland)
    FR: "fr", // French (France)
    IL: "he", // Hebrew (Israel)
    HR: "hr", // Croatian (Croatia)
    HU: "hu", // Hungarian (Hungary)
    ID: "id", // Indonesian (Indonesia)
    IT: "it", // Italian (Italy)
    JP: "ja", // Japanese (Japan)
    KR: "ko", // Korean (South Korea)
    LT: "lt", // Lithuanian (Lithuania)
    LV: "lv", // Latvian (Latvia)
    MY: "ms", // Malay (Malaysia)
    NL: "nl", // Dutch (Netherlands)
    NO: "no", // Norwegian (Norway)
    PL: "pl", // Polish (Poland)
    PT: "pt", // Portuguese (Portugal)
    BR: "pt", // Portuguese (Brazil)
    RO: "ro", // Romanian (Romania)
    RU: "ru", // Russian (Russia)
    SK: "sk", // Slovak (Slovakia)
    SL: "sl", // Slovenian (Slovenia)
    AL: "sq", // Albanian (Albania)
    RS: "sr", // Serbian (Serbia)
    SE: "sv", // Swedish (Sweden)
    ZA: "sw", // Swahili (Tanzania, Kenya, South Africa)
    TH: "th", // Thai (Thailand)
    TR: "tr", // Turkish (Turkey)
    UA: "uk", // Ukrainian (Ukraine)
    PK: "ur", // Urdu (Pakistan)
    VN: "vi", // Vietnamese (Vietnam)
    CN: "zh-CN", // Chinese Simplified (China)
    TW: "zh-TW", // Chinese Traditional (Taiwan)
  };

  const fetchLocation = async () => {
    try {
      const response = await fetch(
        "https://ipinfo.io/json?token=01fa434ee84fd8"
      );
      const data = await response.json();
      const countryCode = data.country;

      const detectedLanguage = countryToLanguageMap[countryCode] || "en";
      setLanguage(detectedLanguage);
      setIsLocation(true);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  useEffect(() => {
    let intervalId = null;

    const checkGoogleTranslate = () => {
      if (
        window.google &&
        window.google.translate &&
        window.google.translate.TranslateElement.InlineLayout
      ) {
        clearInterval(intervalId);
        if (!isLocation) {
          fetchLocation();
        }
        if (language) {
          setCookie("googtrans", `/en/${language}`, 1);
        }
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "af,am,ar,bg,bn,ca,cs,da,de,el,en,es,et,fa,fi,fr,gu,he,hi,hr,hu,id,it,ja,kn,ko,lt,lv,ml,mr,ms,nl,no,pl,pt,ro,ru,sk,sl,sq,sr,sv,sw,ta,te,th,tr,uk,ur,vi,zh-CN,zh-TW",
            layout:
              window.google.translate.TranslateElement.InlineLayout.VERTICAL,
          },
          googleTranslateRef.current
        );
      }
    };

    intervalId = setInterval(checkGoogleTranslate, 100);
    return () => {
      clearInterval(intervalId);
      setIsLocation(false);
    };
  }, [language]);

  const setCookie = (key, value, expiry) => {
    let expires = new Date();
    expires.setTime(expires.getTime() + expiry * 24 * 60 * 60 * 1000);
    document.cookie = key + "=" + value + ";expires=" + expires.toUTCString();
  };

  return (
    <div id="google_translate_element" className="plus-jakarta">
      <div ref={googleTranslateRef}></div>
    </div>
  );
};

export default Translate;
