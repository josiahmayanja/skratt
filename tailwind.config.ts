import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Adds Montserrat as the default sans font
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customLightYellow: '#ffe59a',
        customLightLightYellow: '#f8f0cc',
        customBlue: '#457cd6',
        customDarkGreen: '#38761d',
        customDarkDarkGreen: '#366242',
        customLightGreen: '#74b45c',
        customLighLightGreen: '#d9ead3',
        customGold: '#bf9002',
        customDarkRed: '#db504f',
        customLightRed: '#e2a3a2',

        
      },
    },
  },
  plugins: [],
};

export default config;
