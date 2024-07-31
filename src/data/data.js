// Import house images
import House1_1 from "../assets/images/houses/house-1.jpg";
import House1_2 from "../assets/images/houses/house-2.jpg";
import House1_3 from "../assets/images/houses/house-3.jpg";

// Import agents images
import Avatar1 from "../assets/images/avatars/avatar-1.png";
import Avatar2 from "../assets/images/avatars/avatar-2.png";
import Avatar3 from "../assets/images/avatars/avatar-3.png";

const user1 = {
    name: "کوروش نیستانی",
    phone: "021 1234 5678",
    image: Avatar1,
};
const user2 = {
    name: "پریسا پاکزاد",
    phone: "086 1234 5678",
    image: Avatar2,
};
const user3 = {
    name: "بهمن کاویانی",
    phone: "086 1234 5678",
    image: Avatar3,
};

// Define property data
export const data = [
    {
        id: 1,
        title: "ویلای مدرن ساحلی",
        subtitle: "ویلا با نمای دریا و امکانات مدرن برای اقامت خاطره‌انگیز",
        images: [House1_1, House1_2, House1_3],
        user: user1,
        price: {
            type: "rent_by_night",
            discount: 10,
            currency: "IRR",
            pricePerSale: null,
            pricePerNight: 5000000,
            pricePerMonth: null,
        },
        reviews: {
            count: 4,
            rating: 4.7,
        },
        location: {
            city: "رامسر",
            state: "مازندران",
            country: "ایران",
            address: "خیابان ساحلی، پلاک ۱۲",
            latitude: 36.9322,
            longitude: 50.6533,
        },
        details: {
            size: 120,
            type: "villa",
            floor: 2,
            capacity: 6,
            bedrooms: 3,
            bathrooms: 2,
            description:
                "این ویلای چوبی یکخوابه دوبلکس با چشم انداز رویایی رو به کوه و جنگل...",
            rules: [
                "ارائه کارت ملی هوشمند الزامی است.",
                "ورود حیوانات خانگی، ممنوع است.",
            ],
            ossibilities: [
                "تلویزیون",
                "یخچال",
                "اجاق گاز",
                "مبل",
                "توالت ایرانی",
            ],
        },
        availability: {
            availableFrom: "2024-08-01",
            availableTo: "2024-12-31",
            blackoutDates: ["2024-09-15", "2024-10-10"],
            status: "available",
        },
    },
    {
        id: 2,
        title: "آپارتمان لوکس شهری",
        subtitle: "آپارتمان شیک با دسترسی عالی به مراکز خرید و تفریحی",
        images: [House1_1, House1_2, House1_3],
        user: user2,
        price: {
            type: "sale",
            discount: 5,
            currency: "IRR",
            pricePerSale: 12000000000,
            pricePerNight: null,
            pricePerMonth: null,
        },
        reviews: {
            count: 8,
            rating: 4.9,
        },
        location: {
            city: "تهران",
            state: "تهران",
            country: "ایران",
            address: "خیابان ولیعصر، پلاک ۲۲",
            latitude: 35.6892,
            longitude: 51.389,
        },
        details: {
            size: 200,
            type: "apartment",
            floor: 5,
            capacity: 4,
            bedrooms: 2,
            bathrooms: 2,
            description:
                "این آپارتمان لوکس با دسترسی عالی به مترو، مراکز خرید و تفریحی در قلب تهران واقع شده...",
            rules: [
                "برگزاری مهمانی با هماهنگی میزبان، مجاز است.",
                "استعمال دخانیات داخل اقامتگاه، ممنوع است.",
            ],
            ossibilities: [
                "تلویزیون",
                "گیرنده دیجیتال",
                "یخچال",
                "اجاق گاز",
                "باربیکیو",
            ],
        },
        availability: {
            availableFrom: "2024-09-01",
            availableTo: null,
            status: "available",
        },
    },
    {
        id: 3,
        title: "کلبه‌ی چوبی در جنگل",
        subtitle: "اقامتی دنج و آرام در دل طبیعت بکر",
        images: [House1_1, House1_2, House1_3],
        user: user3,
        price: {
            type: "rent_by_month",
            discount: 15,
            currency: "IRR",
            pricePerSale: null,
            pricePerNight: null,
            pricePerMonth: 8000000,
        },
        reviews: {
            count: 6,
            rating: 4.5,
        },
        location: {
            city: "کلاردشت",
            state: "مازندران",
            country: "ایران",
            address: "محله نیاوران، پلاک ۵",
            latitude: 36.4982,
            longitude: 51.1271,
        },
        details: {
            size: 70,
            type: "cabin",
            floor: 1,
            capacity: 4,
            bedrooms: 1,
            bathrooms: 1,
            description:
                "کلبه چوبی با فضایی دنج و آرام در دل طبیعت بکر کلاردشت...",
            rules: [
                "ورود حیوانات خانگی، مجاز است.",
                "استعمال دخانیات داخل اقامتگاه، ممنوع است.",
            ],
            ossibilities: ["یخچال", "اجاق گاز", "توالت ایرانی", "دوش"],
        },
        availability: {
            availableFrom: "2024-08-15",
            availableTo: "2025-01-15",
            status: "available",
        },
    },
    {
        id: 4,
        title: "ویلای استخردار",
        subtitle: "ویلا با استخر خصوصی و چشم‌انداز زیبا",
        images: [House1_1, House1_2, House1_3],
        user: user1,
        price: {
            type: "rent_by_night",
            discount: 12,
            currency: "IRR",
            pricePerSale: null,
            pricePerNight: 6000000,
            pricePerMonth: null,
        },
        reviews: {
            count: 10,
            rating: 4.8,
        },
        location: {
            city: "کردان",
            state: "البرز",
            country: "ایران",
            address: "بلوار طالقانی، پلاک ۱۰",
            latitude: 35.9623,
            longitude: 50.6832,
        },
        details: {
            size: 150,
            type: "villa",
            floor: 1,
            capacity: 8,
            bedrooms: 4,
            bathrooms: 3,
            description:
                "این ویلا با استخر خصوصی و امکانات لوکس برای تعطیلاتی به‌یادماندنی مناسب است...",
            rules: [
                "ارائه کارت ملی هوشمند الزامی است.",
                "ورود حیوانات خانگی، ممنوع است.",
            ],
            ossibilities: [
                "تلویزیون",
                "یخچال",
                "اجاق گاز",
                "سرویس غذا خوری",
                "مبل",
                "باربیکیو",
            ],
        },
        availability: {
            availableFrom: "2024-07-01",
            availableTo: "2024-12-31",
            status: "available",
        },
    },
    {
        id: 5,
        title: "آپارتمان مبله در مرکز شهر",
        subtitle: "آپارتمان کاملاً مبله با امکانات کامل",
        images: [House1_1, House1_2, House1_3],
        user: user2,
        price: {
            type: "rent_by_month",
            discount: 10,
            currency: "IRR",
            pricePerSale: null,
            pricePerNight: null,
            pricePerMonth: 10000000,
        },
        reviews: {
            count: 12,
            rating: 4.6,
        },
        location: {
            city: "اصفهان",
            state: "اصفهان",
            country: "ایران",
            address: "خیابان چهارباغ عباسی، پلاک ۴۴",
            latitude: 32.6546,
            longitude: 51.668,
        },
        details: {
            size: 130,
            type: "apartment",
            floor: 3,
            capacity: 5,
            bedrooms: 2,
            bathrooms: 2,
            description:
                "این آپارتمان مبله در مرکز شهر اصفهان با امکانات کامل و دسترسی عالی به اماکن تاریخی و دیدنی...",
            rules: [
                "برگزاری مهمانی با هماهنگی میزبان، مجاز است.",
                "استعمال دخانیات داخل اقامتگاه، ممنوع است.",
            ],
            ossibilities: ["تلویزیون", "یخچال", "اجاق گاز", "مبل", "جارو برقی"],
        },
        availability: {
            availableFrom: "2024-10-01",
            availableTo: null,
            status: "available",
        },
    },
    {
        id: 6,
        title: "بوم‌گردی در روستا",
        subtitle: "اقامتی سنتی و خاص در دل روستای بکر",
        images: [House1_1, House1_2, House1_3],
        user: user3,
        price: {
            type: "rent_by_night",
            discount: 20,
            currency: "IRR",
            pricePerSale: null,
            pricePerNight: 3000000,
            pricePerMonth: null,
        },
        reviews: {
            count: 5,
            rating: 4.3,
        },
        location: {
            city: "ابیانه",
            state: "اصفهان",
            country: "ایران",
            address: "روستای ابیانه، پلاک ۱",
            latitude: 33.5743,
            longitude: 51.5925,
        },
        details: {
            size: 90,
            type: "eco-lodge",
            floor: 1,
            capacity: 5,
            bedrooms: 2,
            bathrooms: 1,
            description:
                "این بوم‌گردی در دل روستای تاریخی ابیانه، تجربه‌ای خاص و به‌یادماندنی از اقامت در خانه‌های سنتی...",
            rules: [
                "ورود حیوانات خانگی، ممنوع است.",
                "استعمال دخانیات داخل اقامتگاه، ممنوع است.",
            ],
            ossibilities: [
                "یخچال",
                "اجاق گاز",
                "سرویس غذا خوری",
                "توالت ایرانی",
                "دوش",
            ],
        },
        availability: {
            availableFrom: "2024-08-20",
            availableTo: "2025-02-20",
            status: "available",
        },
    },
    {
        id: 7,
        title: "ویلا در دل کوهستان",
        subtitle: "ویلا با منظره کوهستانی و فضایی آرام",
        images: [House1_1, House1_2, House1_3],
        user: user1,
        price: {
            type: "rent_by_month",
            discount: 5,
            currency: "IRR",
            pricePerSale: null,
            pricePerNight: null,
            pricePerMonth: 15000000,
        },
        reviews: {
            count: 7,
            rating: 4.7,
        },
        location: {
            city: "ماسال",
            state: "گیلان",
            country: "ایران",
            address: "جاده ماسال، پلاک ۲۵",
            latitude: 37.3636,
            longitude: 49.1314,
        },
        details: {
            size: 140,
            type: "villa",
            floor: 1,
            capacity: 7,
            bedrooms: 3,
            bathrooms: 2,
            description:
                "این ویلا در دل کوهستان ماسال، با منظره‌ای زیبا و فضایی آرام برای تعطیلاتی به‌یادماندنی...",
            rules: [
                "ورود حیوانات خانگی، مجاز است.",
                "برگزاری مهمانی با هماهنگی میزبان، مجاز است.",
            ],
            ossibilities: ["تلویزیون", "یخچال", "اجاق گاز", "باربیکیو", "مبل"],
        },
        availability: {
            availableFrom: "2024-07-15",
            availableTo: "2025-01-15",
            status: "available",
        },
    },
    {
        id: 8,
        title: "آپارتمان مدرن در شمال شهر",
        subtitle: "آپارتمان با امکانات مدرن و دسترسی به مراکز تفریحی",
        images: [House1_1, House1_2, House1_3],
        user: user2,
        price: {
            type: "rent_by_night",
            discount: 8,
            currency: "IRR",
            pricePerSale: null,
            pricePerNight: 4500000,
            pricePerMonth: null,
        },
        reviews: {
            count: 9,
            rating: 4.8,
        },
        location: {
            city: "تبریز",
            state: "آذربایجان شرقی",
            country: "ایران",
            address: "خیابان امام، پلاک ۹",
            latitude: 38.0662,
            longitude: 46.2993,
        },
        details: {
            size: 110,
            type: "apartment",
            floor: 4,
            capacity: 4,
            bedrooms: 2,
            bathrooms: 2,
            description:
                "این آپارتمان مدرن در شمال تبریز با امکانات کامل و منظره‌ای زیبا به کوه‌های سهند...",
            rules: [
                "استعمال دخانیات داخل اقامتگاه، ممنوع است.",
                "ورود حیوانات خانگی، مجاز است.",
            ],
            ossibilities: ["تلویزیون", "یخچال", "اجاق گاز", "مبل", "باربیکیو"],
        },
        availability: {
            availableFrom: "2024-09-01",
            availableTo: "2024-12-31",
            status: "available",
        },
    },
    {
        id: 9,
        title: "بوم‌گردی سنتی در شیراز",
        subtitle: "اقامتی خاص و سنتی در دل شهر تاریخی شیراز",
        images: [House1_1, House1_2, House1_3],
        user: user3,
        price: {
            type: "rent_by_night",
            discount: 15,
            currency: "IRR",
            pricePerSale: null,
            pricePerNight: 3500000,
            pricePerMonth: null,
        },
        reviews: {
            count: 10,
            rating: 4.4,
        },
        location: {
            city: "شیراز",
            state: "فارس",
            country: "ایران",
            address: "خیابان زند، پلاک ۱۸",
            latitude: 29.5918,
            longitude: 52.5837,
        },
        details: {
            size: 100,
            type: "eco-lodge",
            floor: 1,
            capacity: 5,
            bedrooms: 2,
            bathrooms: 1,
            description:
                "این بوم‌گردی سنتی در قلب شیراز، تجربه‌ای خاص از اقامت در خانه‌های قدیمی و سنتی...",
            rules: [
                "ورود حیوانات خانگی، ممنوع است.",
                "برگزاری مهمانی با هماهنگی میزبان، مجاز است.",
            ],
            ossibilities: [
                "تلویزیون",
                "یخچال",
                "اجاق گاز",
                "سرویس غذا خوری",
                "توالت ایرانی",
            ],
        },
        availability: {
            availableFrom: "2024-10-01",
            availableTo: "2025-01-01",
            status: "available",
        },
    },
    {
        id: 10,
        title: "ویلا با باغ اختصاصی",
        subtitle: "ویلا با باغ زیبا و امکانات رفاهی کامل",
        images: [House1_1, House1_2, House1_3],
        user: user1,
        price: {
            type: "sale",
            discount: 10,
            currency: "IRR",
            pricePerSale: 18000000000,
            pricePerNight: null,
            pricePerMonth: null,
        },
        reviews: {
            count: 12,
            rating: 4.9,
        },
        location: {
            city: "کرج",
            state: "البرز",
            country: "ایران",
            address: "خیابان چالوس، پلاک ۷",
            latitude: 35.8355,
            longitude: 50.9919,
        },
        details: {
            size: 250,
            type: "villa",
            floor: 1,
            capacity: 10,
            bedrooms: 5,
            bathrooms: 4,
            description:
                "این ویلا با باغ اختصاصی و امکانات کامل رفاهی، مناسب برای سکونت یا تعطیلات به‌یادماندنی...",
            rules: [
                "ورود حیوانات خانگی، ممنوع است.",
                "استعمال دخانیات داخل اقامتگاه، مجاز است.",
            ],
            ossibilities: [
                "تلویزیون",
                "یخچال",
                "اجاق گاز",
                "سرویس غذا خوری",
                "مبل",
                "باربیکیو",
                "جارو برقی",
            ],
        },
        availability: {
            availableFrom: "2024-09-01",
            availableTo: null,
            status: "available",
        },
    },
    {
        id: 11,
        title: "آپارتمان با منظره دریا",
        subtitle: "آپارتمان با ویوی بی‌نظیر به دریا",
        images: [House1_1, House1_2, House1_3],
        user: user2,
        price: {
            type: "rent_by_night",
            discount: 8,
            currency: "IRR",
            pricePerSale: null,
            pricePerNight: 7000000,
            pricePerMonth: null,
        },
        reviews: {
            count: 7,
            rating: 4.6,
        },
        location: {
            city: "چالوس",
            state: "مازندران",
            country: "ایران",
            address: "خیابان ساحلی، پلاک ۴",
            latitude: 36.6512,
            longitude: 51.4215,
        },
        details: {
            size: 130,
            type: "apartment",
            floor: 5,
            capacity: 6,
            bedrooms: 3,
            bathrooms: 2,
            description:
                "این آپارتمان با منظره‌ای بی‌نظیر به دریا، تجربه‌ای خاص و لذت‌بخش از اقامت در شمال ایران را فراهم می‌کند...",
            rules: [
                "استعمال دخانیات داخل اقامتگاه، مجاز است.",
                "ورود حیوانات خانگی، ممنوع است.",
            ],
            ossibilities: [
                "تلویزیون",
                "یخچال",
                "اجاق گاز",
                "سرویس غذا خوری",
                "مبل",
                "باربیکیو",
            ],
        },
        availability: {
            availableFrom: "2024-08-01",
            availableTo: "2024-12-31",
            blackoutDates: ["2024-09-20", "2024-11-05"],
            status: "available",
        },
    },
    {
        id: 12,
        title: "کلبه‌ی سنتی با استخر",
        subtitle: "کلبه‌ای با امکانات سنتی و استخر خصوصی",
        images: [House1_1, House1_2, House1_3],
        user: user3,
        price: {
            type: "rent_by_night",
            discount: 10,
            currency: "IRR",
            pricePerSale: null,
            pricePerNight: 5500000,
            pricePerMonth: null,
        },
        reviews: {
            count: 3,
            rating: 4.2,
        },
        location: {
            city: "کردان",
            state: "البرز",
            country: "ایران",
            address: "خیابان جاده قدیم، پلاک ۳۳",
            latitude: 35.9623,
            longitude: 50.6832,
        },
        details: {
            size: 100,
            type: "cabin",
            floor: 1,
            capacity: 4,
            bedrooms: 2,
            bathrooms: 1,
            description:
                "این کلبه سنتی با استخر خصوصی و امکانات رفاهی کامل، مناسب برای تعطیلاتی دنج و آرام در کردان...",
            rules: [
                "ورود حیوانات خانگی، ممنوع است.",
                "برگزاری مهمانی با هماهنگی میزبان، مجاز است.",
            ],
            ossibilities: [
                "تلویزیون",
                "یخچال",
                "اجاق گاز",
                "سرویس غذا خوری",
                "باربیکیو",
                "دوش",
            ],
        },
        availability: {
            availableFrom: "2024-08-15",
            availableTo: "2024-12-31",
            status: "available",
        },
    },
];

// Function to find min and max prices
const findMinMaxPrices = (data) => {
    const prices = data.map((item) => {
        const { pricePerSale, pricePerNight, pricePerMonth } = item.price;
        return Math.min(
            pricePerSale || Infinity,
            pricePerNight || Infinity,
            pricePerMonth || Infinity
        );
    });
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices.filter((price) => price !== Infinity));
    return { minPrice, maxPrice };
};

// Function to extract unique states for each country
const extractStates = (data) => {
    const states = {};

    data.forEach((item) => {
        const country = item.location.country;
        const state = item.location.state;

        if (!states[country]) {
            states[country] = new Set();
        }
        states[country].add(state);
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
    data.forEach((item) => countries.add(item.location.country));
    return Array.from(countries);
};

// Function to extract unique property types from data
const extractPropertyTypes = (data) => {
    const types = new Set();
    data.forEach((item) => types.add(item.details.type));
    return Array.from(types);
};

// Function to extract unique rent or sell options
const extractRentOrSellOptions = (data) => {
    const options = new Set();
    data.forEach((item) => {
        if (item.price.type) options.add(item.price.type);
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
export {
    extractStates,
    extractCountries,
    extractPropertyTypes,
    extractRentOrSellOptions,
};
