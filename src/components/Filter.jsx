import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import useFilters from "../hooks/useFilters";
import usePriceRange from "../hooks/usePriceRange";
import { isValidPriceRange } from "../utils/priceUtils";
import { data } from "../data";

const Filter = () => {
    const { filters, updateFilters } = useContext(FilterContext);

    // Use custom hooks
    const [minPrice, maxPrice, setMinPrice, setMaxPrice] = usePriceRange(data);
    const {
        availableStates,
        availableCountries,
        propertyTypes,
        rentOrSellOptions,
    } = useFilters(data, filters);

    const handlePriceChange = (event) => {
        const [min, max] = event.target.value.split(",").map(Number);
        if (isValidPriceRange(min, max)) {
            updateFilters({ priceRange: [min, max] });
        }
    };

    const handleMinPriceChange = (event) => {
        const newMinPrice = Number(event.target.value);
        if (
            isValidPriceRange(newMinPrice, filters.priceRange?.[1] || maxPrice)
        ) {
            updateFilters({
                priceRange: [newMinPrice, filters.priceRange?.[1] || maxPrice],
            });
        }
    };

    const handleMaxPriceChange = (event) => {
        const newMaxPrice = Number(event.target.value);
        if (
            isValidPriceRange(filters.priceRange?.[0] || minPrice, newMaxPrice)
        ) {
            updateFilters({
                priceRange: [filters.priceRange?.[0] || minPrice, newMaxPrice],
            });
        }
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
                <div>
                    <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        step="1000"
                        value={filters.priceRange?.[0] || minPrice}
                        onChange={handleMinPriceChange}
                    />
                    <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        step="1000"
                        value={filters.priceRange?.[1] || maxPrice}
                        onChange={handleMaxPriceChange}
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
                    value={filters.country || ""}
                    onChange={handleCountryChange}
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
                    value={filters.state || ""}
                    onChange={handleStateChange}
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
                    value={filters.propertyType || ""}
                    onChange={handlePropertyTypeChange}
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
                    value={filters.rentOrSell || ""}
                    onChange={handleRentOrSellChange}
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
