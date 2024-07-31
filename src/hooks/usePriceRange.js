import { useState, useEffect } from "react";

const usePriceRange = (data, initialMin = 0, initialMax = 10000000) => {
    const [minPrice, setMinPrice] = useState(initialMin);
    const [maxPrice, setMaxPrice] = useState(initialMax);

    useEffect(() => {
        const prices = data.flatMap((item) =>
            [
                item.price.pricePerSale,
                item.price.pricePerNight,
                item.price.pricePerMonth,
            ].filter((price) => price !== null)
        );
        setMinPrice(Math.min(...prices, initialMin));
        setMaxPrice(Math.max(...prices, initialMax));
    }, [data]);

    return [minPrice, maxPrice, setMinPrice, setMaxPrice];
};

export default usePriceRange;
