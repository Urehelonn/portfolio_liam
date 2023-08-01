/** @type {import('tailwindcss').Config} */

import colours from './src/styles/colours'

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        screens: {
            sm: '480px', md: '768px', lg: '976px', xl: '1440px',
        },
        colors: {
            ...colours,
        },
        fontFamily: {
            sans: ['InknutAntiqua', 'sans-serif'], serif: ['Merriweather', 'serif'],
            customRegular: ['InknutAntiqua', 'sans'],
            customBold: ['InknutAntiqua', 'sans'],
            customItalic: ['InknutAntiqua', 'sans'],
        },
    },

    extend: {
        spacing: {
            '128': '32rem', '144': '36rem',
        }, borderRadius: {
            '4xl': '2rem',
        }
    },

    plugins: [],
}
