// Import house images
import House1 from "./assets/images/houses/house-1.jpg";
import House2 from "./assets/images/houses/house-2.jpg";
import House3 from "./assets/images/houses/house-3.jpg";
import House4 from "./assets/images/houses/house-4.jpg";
import House5 from "./assets/images/houses/house-5.jpg";
import House6 from "./assets/images/houses/house-6.jpg";
import House7 from "./assets/images/houses/house-7.jpg";
import House8 from "./assets/images/houses/house-8.jpg";
import House9 from "./assets/images/houses/house-9.jpg";
import House10 from "./assets/images/houses/house-10.jpg";
import House11 from "./assets/images/houses/house-11.jpg";
import House12 from "./assets/images/houses/house-12.jpg";

// Import agents images
import Avatar1 from "./assets/images/avatars/avatar-1.png";
import Avatar2 from "./assets/images/avatars/avatar-2.png";
import Avatar3 from "./assets/images/avatars/avatar-3.png";
import Avatar4 from "./assets/images/avatars/avatar-4.png";

// Define property data
export const data = [
    {
        id: 1,
        type: "House",
        name: "House 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernatur vero obcaecati placeat ab distinctio unde ipsam molestias atque ratione delectus blanditiis nemo eius dignissimos doloremque quae aliquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House1,
        country: "Iran",
        state: "Tehran",
        address: "No. 24, Shariati St, Tehran",
        bedrooms: "6",
        bathrooms: "3",
        surface: "4200 sq ft",
        year: "2016",
        price: "110000",
        rentOrSell: "Sell",
        agent: {
            image: Avatar1,
            name: "Kourosh Neyestani",
            phone: "021 1234 5678",
        },
        off: "10%",
    },
    {
        id: 2,
        type: "House",
        name: "House 2",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernatur vero obcaecati placeat ab distinctio unde ipsam molestias atque ratione delectus blanditiis nemo eius dignissimos doloremque quae aliquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House2,
        country: "UAE",
        state: "Dubai",
        address: "78 Palm Jumeirah, Dubai",
        bedrooms: "6",
        bathrooms: "3",
        surface: "4200 sq ft",
        year: "2016",
        price: "140000",
        rentOrSell: "Sell",
        agent: {
            image: Avatar2,
            name: "Ahmed Bin Khalid",
            phone: "050 123 4567",
        },
    },
    {
        id: 3,
        type: "House",
        name: "House 3",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernatur vero obcaecati placeat ab distinctio unde ipsam molestias atque ratione delectus blanditiis nemo eius dignissimos doloremque quae aliquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House3,
        country: "Turkey",
        state: "Istanbul",
        address: "45 Taksim Square, Istanbul",
        bedrooms: "6",
        bathrooms: "3",
        surface: "4200 sq ft",
        year: "2016",
        price: "170000",
        rentOrSell: "Sell",
        agent: {
            image: Avatar3,
            name: "Fatma Yildiz",
            phone: "0212 345 6789",
        },
        off: "15%",
    },
    {
        id: 4,
        type: "House",
        name: "House 4",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernatur vero obcaecati placeat ab distinctio unde ipsam molestias atque ratione delectus blanditiis nemo eius dignissimos doloremque quae aliquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House4,
        country: "Qatar",
        state: "Doha",
        address: "12 Corniche St, Doha",
        bedrooms: "6",
        bathrooms: "3",
        surface: "4200 sq ft",
        year: "2016",
        price: "200000",
        rentOrSell: "Sell",
        agent: {
            image: Avatar4,
            name: "Salem Al-Thani",
            phone: "4412 3456",
        },
    },
    {
        id: 5,
        type: "House",
        name: "House 5",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernatur vero obcaecati placeat ab distinctio unde ipsam molestias atque ratione delectus blanditiis nemo eius dignissimos doloremque quae aliquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House5,
        country: "Iran",
        state: "Tehran",
        address: "No. 24, Shariati St, Tehran",
        bedrooms: "5",
        bathrooms: "3",
        surface: "4200 sq ft",
        year: "2015",
        price: "210000",
        rentOrSell: "Sell",
        agent: {
            image: Avatar1,
            name: "Kourosh Neyestani",
            phone: "021 1234 5678",
        },
    },
    {
        id: 6,
        type: "House",
        name: "House 6",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernatur vero obcaecati placeat ab distinctio unde ipsam molestias atque ratione delectus blanditiis nemo eius dignissimos doloremque quae aliquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House6,
        country: "Iran",
        state: "Tehran",
        address: "No. 24, Shariati St, Tehran",
        bedrooms: "6",
        bathrooms: "3",
        surface: "6200 sq ft",
        year: "2014",
        price: "220000",
        rentOrSell: "Sell",
        agent: {
            image: Avatar1,
            name: "Kourosh Neyestani",
            phone: "021 1234 5678",
        },
    },
    {
        id: 7,
        type: "Apartment",
        name: "Apartment 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernatur vero obcaecati placeat ab distinctio unde ipsam molestias atque ratione delectus blanditiis nemo eius dignissimos doloremque quae aliquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House7,
        country: "Iran",
        state: "Tehran",
        address: "45 Vali Asr St, Tehran",
        bedrooms: "3",
        bathrooms: "2",
        surface: "3000 sq ft",
        year: "2011",
        price: "750000",
        rentOrSell: "Sell",
        agent: {
            image: Avatar1,
            name: "Kourosh Neyestani",
            phone: "021 1234 5678",
        },
    },
    {
        id: 8,
        type: "Apartment",
        name: "Apartment 2",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernatur vero obcaecati placeat ab distinctio unde ipsam molestias atque ratione delectus blanditiis nemo eius dignissimos doloremque quae aliquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House8,
        country: "UAE",
        state: "Dubai",
        address: "15 Marina, Dubai",
        bedrooms: "3",
        bathrooms: "2",
        surface: "3000 sq ft",
        year: "2012",
        price: "90000",
        rentOrSell: "Sell",
        agent: {
            image: Avatar2,
            name: "Ahmed Bin Khalid",
            phone: "050 123 4567",
        },
    },
    {
        id: 9,
        type: "Apartment",
        name: "Apartment 3",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernatur vero obcaecati placeat ab distinctio unde ipsam molestias atque ratione delectus blanditiis nemo eius dignissimos doloremque quae aliquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House9,
        country: "Turkey",
        state: "Istanbul",
        address: "78 Istiklal St, Istanbul",
        bedrooms: "2",
        bathrooms: "1",
        surface: "2000 sq ft",
        year: "2011",
        price: "80000",
        rentOrSell: "Rent",
        agent: {
            image: Avatar3,
            name: "Fatma Yildiz",
            phone: "0212 345 6789",
        },
    },
    {
        id: 10,
        type: "Apartment",
        name: "Apartment 4",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernatur vero obcaecati placeat ab distinctio unde ipsam molestias atque ratione delectus blanditiis nemo eius dignissimos doloremque quae aliquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House10,
        country: "Qatar",
        state: "Doha",
        address: "56 West Bay, Doha",
        bedrooms: "4",
        bathrooms: "3",
        surface: "4000 sq ft",
        year: "2013",
        price: "120000",
        rentOrSell: "Sell", 
        agent: {
            image: Avatar4,
            name: "Salem Al-Thani",
            phone: "4412 3456",
        },
    },
    {
        id: 11,
        type: "Apartment",
        name: "Apartment 5",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernatur vero obcaecati placeat ab distinctio unde ipsam molestias atque ratione delectus blanditiis nemo eius dignissimos doloremque quae aliquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House11,
        country: "Iraq",
        state: "Baghdad",
        address: "12 Al Mansour, Baghdad",
        bedrooms: "4",
        bathrooms: "2",
        surface: "4000 sq ft",
        year: "2012",
        price: "180000",
        rentOrSell: "Sell", 
        agent: {
            image: Avatar1,
            name: "Kourosh Neyestani",
            phone: "021 1234 5678",
        },
        off: "5%",
    },
    {
        id: 12,
        type: "Apartment",
        name: "Apartment 6",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernatur vero obcaecati placeat ab distinctio unde ipsam molestias atque ratione delectus blanditiis nemo eius dignissimos doloremque quae aliquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House12,
        country: "Iran",
        state: "Mashhad",
        address: "9 Ferdowsi Sq, Mashhad",
        bedrooms: "3",
        bathrooms: "2",
        surface: "3100 sq ft",
        year: "2010",
        price: "680000",
        rentOrSell: "Sell", 
        agent: {
            image: Avatar1,
            name: "Kourosh Neyestani",
            phone: "021 1234 5678",
        },
    },
];


// Function to find min and max prices
const findMinMaxPrices = (data) => {
    const prices = data.map((item) => Number(item.price));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return { minPrice, maxPrice };
};

// Function to extract unique states for each country
const extractStates = (data) => {
    const states = {};
    
    data.forEach(item => {
        if (!states[item.country]) {
            states[item.country] = new Set();
        }
        states[item.country].add(item.state);
    });
    
    // Convert sets to arrays for easier use
    for (const country in states) {
        states[country] = Array.from(states[country]);
    }
    
    return states;
};

// Function to extract unique countries from data
const extractCountries = (data) => {
    const countries = new Set();
    data.forEach(item => countries.add(item.country));
    return Array.from(countries);
};

// Function to extract unique property types from data
const extractPropertyTypes = (data) => {
    const types = new Set();
    data.forEach(item => types.add(item.type));
    return Array.from(types);
};

// Function to extract unique rent or sell options
const extractRentOrSellOptions = (data) => {
    const options = new Set();
    data.forEach(item => {
        if (item.rentOrSell) options.add(item.rentOrSell);
    });
    return Array.from(options);
};

// Find min and max prices
const { minPrice, maxPrice } = findMinMaxPrices(data);

console.log(`Minimum Price: ${minPrice}`);
console.log(`Maximum Price: ${maxPrice}`);

const states = extractStates(data);
const countries = extractCountries(data);
const propertyTypes = extractPropertyTypes(data);
const rentOrSellOptions = extractRentOrSellOptions(data);

console.log(states);
console.log(countries);
console.log(propertyTypes);
console.log(rentOrSellOptions);

// Export functions
export { extractStates, extractCountries, extractPropertyTypes, extractRentOrSellOptions };
