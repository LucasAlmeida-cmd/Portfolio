import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        base: ['1.1rem', '1.6rem'], 
        lg: ['1.2rem', '1.6rem'],
        xl: ['1.4rem', '1.6rem'],   
      },
    },
    screens: {
      'sm': {'min': '640px', 'max': '768px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px'},
    },
  },
  plugins: [],
};
export default config;
