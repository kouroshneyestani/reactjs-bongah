/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", 
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "var(--background-color)",
                text: "var(--text-color)",
                primary: "var(--primary-color)",
                secondary: "var(--secondary-color)",
            },
        },
    },
    plugins: [],
};
