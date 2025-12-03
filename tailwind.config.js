import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import svgr from 'vite-plugin-svgr';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'light', // default
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                // sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                "main-nav": "#062243",
                "secondary": "#bec0c7",
                "admin-acive-nav": "#ecf3ff",
                "admin-primary": "#465FFF",
                brand: {
                    dark: "#1a2e4b",   // deep navy
                    medium: "#004080", // mid blue
                    light: "#25608a",  // lighter blue
                },
                text: {
                    textLight: "#fff",
                    textDark: "#000",
                    primary: "#1b3564",
                    error: "#e00"
                },
                bg: {
                    infoHead: "#72cdf4",
                    primary: "#ccc",
                    secondary: "#fff",
                    btn: "#efefef",
                    adminBG: "#ecf3ff"
                },
            },
            backgroundImage: {
                "brand-gradient": "linear-gradient(to right, #1a2e4b, #004080, #25608a)",
            },
        },
    },

    plugins: [svgr(),forms],
};
