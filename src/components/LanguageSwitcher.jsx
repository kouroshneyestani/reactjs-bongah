import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "en"
    );

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n]);

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        localStorage.setItem("language", selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <select value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="fa">Persian</option>
        </select>
    );
};

export default LanguageSwitcher;
