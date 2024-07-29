import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

const Filter = () => {
    const { filters, updateFilters } = useContext(FilterContext);

    // Check if `updateFilters` is defined
    if (typeof updateFilters !== "function") {
        console.error("updateFilters is not defined or is not a function");
        return null; // Return null or an error message if `updateFilters` is not available
    }

    const handlePriceChange = (event) => {
        const [min, max] = event.target.value.split(",");
        updateFilters({ priceRange: [Number(min), Number(max)] });
    };

    const handleCountryChange = (event) => {
        updateFilters({ country: event.target.value, state: "" });
    };

    const handleStateChange = (event) => {
        updateFilters({ state: event.target.value });
    };

    const handlePropertyTypeChange = (event) => {
        updateFilters({ propertyType: event.target.value });
    };

    const handleRentOrSellChange = (event) => {
        updateFilters({ rentOrSell: event.target.value });
    };

    return (
        <div>
            <label>
                Price Range:
                <input
                    type="range"
                    min="0"
                    max="1000000"
                    value={filters.priceRange?.join(",") || "0,1000000"}
                    onChange={handlePriceChange}
                    multiple
                />
            </label>
            <label>
                Country:
                <select
                    value={filters.country || ""}
                    onChange={handleCountryChange}
                >
                    <option value="">All</option>
                    <option value="Iran">Iran</option>
                    <option value="UAE">UAE</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Iraq">Iraq</option>
                </select>
            </label>
            <label>
                State:
                <select
                    value={filters.state || ""}
                    onChange={handleStateChange}
                >
                    <option value="">All</option>
                    {/* Add states related to the selected country here */}
                </select>
            </label>
            <label>
                Property Type:
                <select
                    value={filters.propertyType || ""}
                    onChange={handlePropertyTypeChange}
                >
                    <option value="">All</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                </select>
            </label>
            <label>
                Rent or Sell:
                <select
                    value={filters.rentOrSell || ""}
                    onChange={handleRentOrSellChange}
                >
                    <option value="">All</option>
                    <option value="Rent">Rent</option>
                    <option value="Sell">Sell</option>
                </select>
            </label>
        </div>
    );
};

export default Filter;
