import React, { useContext, useEffect, useState } from "react";
import ProductsItem from "./ProductsItem";
import { FilterContext } from "../context/FilterContext";
import { data } from "../data/data";

const Products = () => {
    const { filters } = useContext(FilterContext);
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        let filtered = data;

        if (filters.priceRange) {
            filtered = filtered.filter((item) => {
                const { pricePerSale, pricePerNight, pricePerMonth } =
                    item.price;
                const minPrice = filters.priceRange[0];
                const maxPrice = filters.priceRange[1];
                return (
                    (pricePerNight >= minPrice && pricePerNight <= maxPrice) ||
                    (pricePerMonth &&
                        pricePerMonth >= minPrice &&
                        pricePerMonth <= maxPrice) ||
                    (pricePerSale &&
                        pricePerSale >= minPrice &&
                        pricePerSale <= maxPrice)
                );
            });
        }

        if (filters.country) {
            filtered = filtered.filter(
                (item) => item.location.country === filters.country
            );
        }

        if (filters.state) {
            filtered = filtered.filter(
                (item) => item.location.state === filters.state
            );
        }

        if (filters.propertyType) {
            filtered = filtered.filter(
                (item) => item.details.type === filters.propertyType
            );
        }

        if (filters.rentOrSell) {
            filtered = filtered.filter(
                (item) => item.price.type === filters.rentOrSell
            );
        }

        setFilteredData(filtered);
    }, [filters]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {filteredData.length > 0 ? (
                filteredData.map((item) => (
                    <ProductsItem item={item} key={item.id} />
                ))
            ) : (
                <p>هیچ موردی پیدا نشد.</p>
            )}
        </div>
    );
};

export default Products;
