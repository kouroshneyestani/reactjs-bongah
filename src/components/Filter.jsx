import React, { useContext, useState, useEffect } from "react";
import { FilterContext } from "../context/FilterContext";
import { data } from "../data";
import {
    extractStates,
    extractCountries,
    extractPropertyTypes,
    extractRentOrSellOptions,
} from "../data";


const Filter = () => {
    const { filters, updateFilters } = useContext(FilterContext);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000000);
    const [availableStates, setAvailableStates] = useState([]);
    const [availableCountries, setAvailableCountries] = useState([]);
    const [propertyTypes, setPropertyTypes] = useState([]);
    const [rentOrSellOptions, setRentOrSellOptions] = useState([]);

    useEffect(() => {
        // Initialize min and max prices
        const prices = data.map((item) => Number(item.price));
        setMinPrice(Math.min(...prices));
        setMaxPrice(Math.max(...prices));
    }, []);

    useEffect(() => {
        // Update available states and countries
        const states = extractStates(data);
        setAvailableCountries(extractCountries(data));
        if (filters.country) {
            setAvailableStates(states[filters.country] || []);
        } else {
            setAvailableStates([]);
        }
    }, [filters.country]);

    useEffect(() => {
        // Update property types and rent or sell options
        setPropertyTypes(extractPropertyTypes(data));
        setRentOrSellOptions(extractRentOrSellOptions(data));
    }, []);

    const handlePriceChange = (event) => {
        const [min, max] = event.target.value.split(",").map(Number);
        if (min >= max) return; // Prevent invalid ranges
        updateFilters({ priceRange: [min, max] });
    };

    const handleMinPriceChange = (event) => {
        const newMinPrice = Number(event.target.value);
        if (newMinPrice > (filters.priceRange?.[1] || maxPrice)) return; // Prevent min price exceeding max price
        updateFilters({
            priceRange: [newMinPrice, filters.priceRange?.[1] || maxPrice],
        });
    };

    const handleMaxPriceChange = (event) => {
        const newMaxPrice = Number(event.target.value);
        if (newMaxPrice < (filters.priceRange?.[0] || minPrice)) return; // Prevent max price being less than min price
        updateFilters({
            priceRange: [filters.priceRange?.[0] || minPrice, newMaxPrice],
        });
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
