// hooks/usePriceRange.js
import { useState, useEffect } from "react";

const usePriceRange = (data, initialMin = 0, initialMax = 1000000) => {
    const [minPrice, setMinPrice] = useState(initialMin);
    const [maxPrice, setMaxPrice] = useState(initialMax);

    useEffect(() => {
        const prices = data.map((item) => Number(item.price));
        setMinPrice(Math.min(...prices));
        setMaxPrice(Math.max(...prices));
    }, [data]);

    return [minPrice, maxPrice, setMinPrice, setMaxPrice];
};

export default usePriceRange;
