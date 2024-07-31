import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { Container } from "./components/index";

const App = () => {
    return (
        <>
            <LanguageSwitcher />
            <Container>
                <Filter />
                <Products />
            </Container>
        </>
    );
};

export default App;
