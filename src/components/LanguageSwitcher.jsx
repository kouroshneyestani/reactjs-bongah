import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        if (lng === "fa") {
            document.body.setAttribute("dir", "rtl");
        } else {
            document.body.setAttribute("dir", "ltr");
        }
    };

    return (
        <div>
            <select onChange={(e) => changeLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="fa">فارسی</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
