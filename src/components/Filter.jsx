import React, { useContext, useState, useEffect } from "react";
import { FilterContext } from "../context/FilterContext";
import {
    data,
    states,
    countries,
    propertyTypes,
    rentOrSellOptions,
} from "../data";

const Filter = () => {
    const { filters, updateFilters } = useContext(FilterContext);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000000);
    const [availableStates, setAvailableStates] = useState([]);

    useEffect(() => {
        const prices = data.map((item) => Number(item.price));
        setMinPrice(Math.min(...prices));
        setMaxPrice(Math.max(...prices));
    }, []);

    useEffect(() => {
        if (filters.country && states[filters.country]) {
            setAvailableStates(states[filters.country]);
        } else {
            setAvailableStates([]);
        }
    }, [filters.country]);

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
                    min={minPrice}
                    max={maxPrice}
                    step="1000"
                    value={filters.priceRange?.[0] || minPrice}
                    onChange={(e) =>
                        handlePriceChange({
                            target: {
                                value: `${e.target.value},${
                                    filters.priceRange?.[1] || maxPrice
                                }`,
                            },
                        })
                    }
                />
                <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    step="1000"
                    value={filters.priceRange?.[1] || maxPrice}
                    onChange={(e) =>
                        handlePriceChange({
                            target: {
                                value: `${
                                    filters.priceRange?.[0] || minPrice
                                },${e.target.value}`,
                            },
                        })
                    }
                />
                <div>
                    ${filters.priceRange?.[0] || minPrice} - $
                    {filters.priceRange?.[1] || maxPrice}
                </div>
            </label>
            <label>
                Country:
                <select
                    value={filters.country || ""}
                    onChange={handleCountryChange}
                >
                    <option value="">All</option>
                    {countries.map((country) => (
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
