// import house images
import House1 from "./assets/images/houses/house (1).jpg";
import House2 from "./assets/images/houses/house (2).jpg";
import House3 from "./assets/images/houses/house (3).jpg";
import House4 from "./assets/images/houses/house (4).jpg";
import House5 from "./assets/images/houses/house (5).jpg";
import House6 from "./assets/images/houses/house (6).jpg";
import House7 from "./assets/images/houses/house (7).jpg";
import House8 from "./assets/images/houses/house (8).jpg";
import House9 from "./assets/images/houses/house (9).jpg";
import House10 from "./assets/images/houses/house (10).jpg";
import House11 from "./assets/images/houses/house (11).jpg";
import House12 from "./assets/images/houses/house (12).jpg";

// import agents images
import Avatar1 from "./assets/images/avatars/avatar-1.png";
import Avatar2 from "./assets/images/avatars/avatar-2.png";
import Avatar3 from "./assets/images/avatars/avatar-3.png";
import Avatar4 from "./assets/images/avatars/avatar-4.png";

export const data = [
    {
        id: 1,
        type: "House",
        name: "House 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernatur vero obcaecati placeat ab distinctio unde ipsam molestias atque ratione delectus blanditiis nemo eius dignissimos doloremque quae aliquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House1,
        country: "Iran",
        address: "No. 24, Shariati St, Tehran",
        bedrooms: "6",
        bathrooms: "3",
        surface: "4200 sq ft",
        year: "2016",
        price: "110000",
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
        address: "78 Palm Jumeirah, Dubai",
        bedrooms: "6",
        bathrooms: "3",
        surface: "4200 sq ft",
        year: "2016",
        price: "140000",
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
        address: "45 Taksim Square, Istanbul",
        bedrooms: "6",
        bathrooms: "3",
        surface: "4200 sq ft",
        year: "2016",
        price: "170000",
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
        address: "12 Corniche St, Doha",
        bedrooms: "6",
        bathrooms: "3",
        surface: "4200 sq ft",
        year: "2016",
        price: "20000",
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
        address: "No. 24, Shariati St, Tehran",
        bedrooms: "5",
        bathrooms: "3",
        surface: "4200 sq ft",
        year: "2015",
        price: "210000",
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
        address: "No. 24, Shariati St, Tehran",
        bedrooms: "6",
        bathrooms: "3",
        surface: "6200 sq ft",
        year: "2014",
        price: "220000",
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
        address: "45 Vali Asr St, Tehran",
        bedrooms: "3",
        bathrooms: "2",
        surface: "3000 sq ft",
        year: "2011",
        price: "7500000",
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
        address: "15 Marina, Dubai",
        bedrooms: "3",
        bathrooms: "2",
        surface: "3000 sq ft",
        year: "2012",
        price: "90000",
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
        address: "78 Istiklal St, Istanbul",
        bedrooms: "2",
        bathrooms: "1",
        surface: "2000 sq ft",
        year: "2011",
        price: "80000",
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
        address: "56 West Bay, Doha",
        bedrooms: "4",
        bathrooms: "3",
        surface: "4000 sq ft",
        year: "2013",
        price: "120000",
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
        address: "12 Al Mansour, Baghdad",
        bedrooms: "4",
        bathrooms: "2",
        surface: "4000 sq ft",
        year: "2012",
        price: "180000",
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
        address: "9 Ferdowsi Sq, Mashhad",
        bedrooms: "3",
        bathrooms: "2",
        surface: "3100 sq ft",
        year: "2010",
        price: "680000",
        agent: {
            image: Avatar1,
            name: "Kourosh Neyestani",
            phone: "021 1234 5678",
        },
    },
];

// Function to find min and max prices
const findMinMaxPrices = (data) => {
    const prices = data.map(item => Number(item.price));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return { minPrice, maxPrice };
};

// Find min and max prices
const { minPrice, maxPrice } = findMinMaxPrices(data);

console.log(`Minimum Price: ${minPrice}`);
console.log(`Maximum Price: ${maxPrice}`);