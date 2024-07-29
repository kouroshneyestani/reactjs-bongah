import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import useFilters from "../hooks/useFilters";
import usePriceRange from "../hooks/usePriceRange";
import { isValidPriceRange } from "../utils/priceUtils";
import { data } from "../data";

const Filter = () => {
    const { filters, updateFilters } = useContext(FilterContext);

    // Use custom hooks
    const [minPrice, maxPrice] = usePriceRange(data);
    const {
        availableStates,
        availableCountries,
        propertyTypes,
        rentOrSellOptions,
    } = useFilters(data, filters);

    const handlePriceChange = (event) => {
        const { name, value } = event.target;
        const newValue = Number(value);

        if (name === "minPrice") {
            if (
                isValidPriceRange(newValue, filters.priceRange?.[1] || maxPrice)
            ) {
                updateFilters({
                    priceRange: [newValue, filters.priceRange?.[1] || maxPrice],
                });
            }
        } else if (name === "maxPrice") {
            if (
                isValidPriceRange(filters.priceRange?.[0] || minPrice, newValue)
            ) {
                updateFilters({
                    priceRange: [filters.priceRange?.[0] || minPrice, newValue],
                });
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        // Handle special case for country selection
        if (name === "country") {
            updateFilters({ country: value, state: "" });
        } else {
            updateFilters({ [name]: value });
        }
    };

    return (
        <div>
            <label>
                Price Range:
                <div>
                    <input
                        type="range"
                        name="minPrice"
                        min={minPrice}
                        max={maxPrice}
                        step="1000"
                        value={filters.priceRange?.[0] || minPrice}
                        onChange={handlePriceChange}
                    />
                    <input
                        type="range"
                        name="maxPrice"
                        min={minPrice}
                        max={maxPrice}
                        step="1000"
                        value={filters.priceRange?.[1] || maxPrice}
                        onChange={handlePriceChange}
                    />
                    <div>
                        ${filters.priceRange?.[0] || minPrice} - $
                        {filters.priceRange?.[1] || maxPrice}
                    </div>
                </div>
            </label>
            <label>
                Country:
                <select
                    name="country"
                    value={filters.country || ""}
                    onChange={handleChange}
                >
                    <option value="">All</option>
                    {availableCountries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                State:
                <select
                    name="state"
                    value={filters.state || ""}
                    onChange={handleChange}
                    disabled={availableStates.length === 0}
                >
                    <option value="">All</option>
                    {availableStates.map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Property Type:
                <select
                    name="propertyType"
                    value={filters.propertyType || ""}
                    onChange={handleChange}
                >
                    <option value="">All</option>
                    {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Rent or Sell:
                <select
                    name="rentOrSell"
                    value={filters.rentOrSell || ""}
                    onChange={handleChange}
                >
                    <option value="">All</option>
                    {rentOrSellOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default Filter;
