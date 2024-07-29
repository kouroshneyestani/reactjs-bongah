// hooks/useFilters.js
import { useState, useEffect } from "react";
import {
    extractStates,
    extractCountries,
    extractPropertyTypes,
    extractRentOrSellOptions,
} from "../data";

const useFilters = (data, filters) => {
    const [availableStates, setAvailableStates] = useState([]);
    const [availableCountries, setAvailableCountries] = useState([]);
    const [propertyTypes, setPropertyTypes] = useState([]);
    const [rentOrSellOptions, setRentOrSellOptions] = useState([]);

    useEffect(() => {
        const states = extractStates(data);
        setAvailableCountries(extractCountries(data));
        if (filters.country) {
            setAvailableStates(states[filters.country] || []);
        } else {
            setAvailableStates([]);
        }
    }, [filters.country, data]);

    useEffect(() => {
        setPropertyTypes(extractPropertyTypes(data));
        setRentOrSellOptions(extractRentOrSellOptions(data));
    }, [data]);

    return {
        availableStates,
        availableCountries,
        propertyTypes,
        rentOrSellOptions,
    };
};

export default useFilters;
