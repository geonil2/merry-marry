import type { Config } from 'tailwindcss';

const config: Config = {
  content: [`./src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      fontFamily: {
        roboto: [`Roboto`],
        poppins: [`Poppins`],
      },
      backgroundImage: {
        'gradient-radial': `radial-gradient(var(--tw-gradient-stops))`,
        'gradient-conic': `conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))`,
      },
      keyframes: {
        fadeInRight: {
          '0%': { transform: `translateX(100%)` },
          '100%': { transform: `translateX(0%)` },
        },
        spin: {
          '0%': { transform: `rotate(0deg)` },
          '100%': { transform: `rotate(360deg)` },
        },
      },
      animation: {
        spin: `spin 3s linear infinite`,
        fadeInRight: `fadeInRight .3s forwards`,
      },
      boxShadow: {
        basic: `4px 4px 27px 0px #2F456F31`,
        button: `0 8px 16px 0 rgba(13, 127, 233, 0.24)`,
        buttonHover: `0 8px 16px 0 rgba(3, 81, 146, 0.24)`,
      },
      colors: {
        main: `#845EC2`,
        sub: `#C493FF`,
        white: `#FFFFFF`,
        black: `#212B36`,
        red: `#E42D3C`,
        gray_950: `#2F3037`,
        gray_900: `#51555E`,
        gray_800: `#606573`,
        gray_700: `#757a8d`,
        gray_500: `#9ea6b6`,
        gray_400: `#b3bac6`,
        gray_300: `#c9d0d8`,
        gray_200: `#dee3e7`,
        gray_100: `#edeff2`,
        gray_50: `#F2F4F6`,

        letter: {
          white: `#FFFFFF`,
          black: `#112A41`,
          gray: `#738BA1`,
        },
      },
    },
  },
  plugins: [],
};
export default config;
