import React, { useContext, useEffect } from "react";
import { FilterContext } from "../context/FilterContext";
import useFilters from "../hooks/useFilters";
import usePriceRange from "../hooks/usePriceRange";
import { data } from "../data/data";

const Filter = () => {
    const { filters, updateFilters } = useContext(FilterContext);

    // Use custom hooks
    const [minPrice, maxPrice] = usePriceRange(data);
    const { availableStates, availableCountries, propertyTypes } = useFilters(
        data,
        filters
    );

    useEffect(() => {
         updateFilters({
             priceRange: [minPrice, maxPrice],
         });
     }, [])

    const handlePriceChange = (event) => {
        const { name, value } = event.target;
        const newValue = Number(value);

        if (name === "minPrice") {
            updateFilters({
                priceRange: [newValue, maxPrice],
            });
        } else if (name === "maxPrice") {
            updateFilters({
                priceRange: [minPrice, newValue],
            });
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "country") {
            updateFilters({ country: value, state: "" });
        } else {
            updateFilters({ [name]: value });
        }
    };

    return (
        <div>
            <label>
                رنج قیمت
                <div>
                    <input
                        type="range"
                        name="minPrice"
                        min={minPrice}
                        max={maxPrice}
                        step="10000"
                        value={minPrice}
                        onChange={handlePriceChange}
                    />
                    <input
                        type="range"
                        name="maxPrice"
                        min={minPrice}
                        max={maxPrice}
                        step="10000"
                        value={maxPrice}
                        onChange={handlePriceChange}
                    />
                    <div>
                        {filters.priceRange?.[0].toLocaleString()  || minPrice.toLocaleString() } -{" "}
                        {filters.priceRange?.[1].toLocaleString()  || maxPrice.toLocaleString() }
                    </div>
                </div>
            </label>
            <label>
                کشور
                <select
                    name="country"
                    value={filters.country || ""}
                    onChange={handleChange}
                >
                    <option value="">همه</option>
                    {availableCountries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                استان
                <select
                    name="state"
                    value={filters.state || ""}
                    onChange={handleChange}
                    disabled={availableStates.length === 0}
                >
                    <option value="">همه</option>
                    {availableStates.map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                نوع
                <select
                    name="propertyType"
                    value={filters.propertyType || ""}
                    onChange={handleChange}
                >
                    <option value="">همه</option>
                    {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default Filter;
