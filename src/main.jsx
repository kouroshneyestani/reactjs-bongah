import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilterProvider } from "./context/FilterContext";
import "./i18n";
import "./index.css";

// Create the root element and render the application
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FilterProvider>
            <App />
        </FilterProvider>
    </React.StrictMode>
);
