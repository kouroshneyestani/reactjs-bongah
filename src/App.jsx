import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./App.css";

const App = () => {
    const { t } = useTranslation();

    return (
        <div className="App">
            <LanguageSwitcher />
            <h1>{t("welcome")}</h1>
        </div>
    );
};

export default App;
