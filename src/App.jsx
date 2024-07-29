import React from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./components/ThemeToggle";
import LanguageSwitcher from "./components/LanguageSwitcher";

const App = () => {
    const { t } = useTranslation();

    return (
        <div className="App">
            <div className="p-4">
                <LanguageSwitcher />
                <ThemeToggle />
            </div>
            <h1 className="text-2xl">{t("welcome")}</h1>
        </div>
    );
};

export default App;
