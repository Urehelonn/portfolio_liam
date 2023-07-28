/** @type {import('tailwindcss').Config} */
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
            'dark': '#3A363E',
            'sky': '#BDD8E7',
            'green': {
                100: '#cffafe',
                200: '#C4D9C0',
                300: '#799775',
                400: '#5C6E59',
                500: '#425141',
            }
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
