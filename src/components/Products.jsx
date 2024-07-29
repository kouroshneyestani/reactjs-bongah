import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../context/FilterContext";
import { data } from "../data";

const Products = () => {
    const { filters } = useContext(FilterContext);
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        let filtered = data;

        if (filters.priceRange) {
            filtered = filtered.filter(
                (item) =>
                    item.price >= filters.priceRange[0] &&
                    item.price <= filters.priceRange[1]
            );
        }

        if (filters.country) {
            filtered = filtered.filter(
                (item) => item.country === filters.country
            );
        }

        if (filters.state) {
            filtered = filtered.filter((item) =>
                item.address.includes(filters.state)
            );
        }

        if (filters.propertyType) {
            filtered = filtered.filter(
                (item) => item.type === filters.propertyType
            );
        }

        if (filters.rentOrSell) {
            filtered = filtered.filter(
                (item) => item.rentOrSell === filters.rentOrSell
            );
        }

        setFilteredData(filtered);
    }, [filters]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredData.length > 0 ? (
                filteredData.map((item) => (
                    <div key={item.id} className="product-item">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>{item.country}</p>
                        <p>{item.address}</p>
                        <p>{item.bedrooms} Bedrooms</p>
                        <p>{item.bathrooms} Bathrooms</p>
                        <p>{item.surface} sq ft</p>
                        <p>Year: {item.year}</p>
                        <p>Price: ${item.price}</p>
                        <p>Agent: {item.agent.name}</p>
                        <p>Contact: {item.agent.phone}</p>
                    </div>
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};

export default Products;
