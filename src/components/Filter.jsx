import React, { useContext, useState, useEffect } from "react";
import { FilterContext } from "../context/FilterContext";
import { data } from "../data"; // Import data to calculate price range

const Filter = () => {
    const { filters, updateFilters } = useContext(FilterContext);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000000);

    useEffect(() => {
        const prices = data.map((item) => Number(item.price));
        setMinPrice(Math.min(...prices));
        setMaxPrice(Math.max(...prices));
    }, []);

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
                    min={minPrice}
                    max={maxPrice}
                    step="1000" // Adjust step size if needed
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
                    step="1000" // Adjust step size if needed
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
