/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1rem',
                lg: '2rem',
                xl: '4rem',
                '2xl': '4rem',
            },
        },

        extend: {
            colors: {
                primary_light: '#00c3e9',
                primary_dark: '#016aaf',
                secondary: '#1a1f65',
                nav: '#ffffff',
                footer: '#A7A7A7',
                footer_hover: '#D3D3D3',
                blue: '#072f60',
                lightblue: '60A5FA',
                deepblue: '#0E1B24',
                lightgrey: '#222222',
                sidebar: 'rgba(255, 255, 255, 0.75)',
                muted: '#6E777C',

                main: '#0A9DC9',
                premium: '#14AA25',
                gold: '#D4AF37',
                silver: '#808080',
                invited: '#EB8060',
            },

            backgroundImage: {
                nomatch: 'url("./src/assets/img/planetas.gif")',
            },

            fontFamily: {
                sans: ['Source Sans Pro', 'sans-serif'],
                hallo: ['Hallo Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },

            transitionDuration: {
                0: '0ms',
            },

            width: {
                '6/25': '24%',
            },

            height: {
                150: '40rem',
            },

            screens: {
                '3xl': '1600px',
                '4xl': '1930px',
            },

            minWidth: {
                '1/10': '10%',
            },

            fontSize: {
                '10xl': ' 10rem',
                '11xl': ' 12rem',
                '12xl': ' 14rem',
                '13xl': ' 16rem',
            },

            maxWidth: {
                '1/6': '16,7%',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                10: '10rem',
                15: '15rem',
                20: '20rem',
            },

            fontWeight: {
                semiextrabold: 750,
            },

            scale: {
                102: '1.02',
            },

            borderWidth: {
                0: '0',
                2: '2px',
                3: '3px',
                4: '4px',
                6: '6px',
                8: '8px',
            },
        },
    },
    plugins: [],
};
