import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import { Container } from "./components/index";

const App = () => {
    return (
        <>
            <Container>
                <Filter />
                <Products />
            </Container>
        </>
    );
};

export default App;
