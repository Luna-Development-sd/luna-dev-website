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
        luna: {
          green: {
            DEFAULT: '#175442',
            dark: '#0f3d2f',
            light: '#1e6b54',
          },
          terracotta: {
            DEFAULT: '#b97a63',
            light: '#d4a89a',
            dark: '#8f5e4d',
          },
          charcoal: {
            DEFAULT: '#2a2c2e',
            light: '#3d4042',
          },
          beige: {
            DEFAULT: '#f5f3f0',
            dark: '#e8e4df',
          },
          sand: {
            DEFAULT: '#d3d2c9',
          }
        },
      },
      letterSpacing: {
        'wider-xl': '0.15em',
      },
    },
  },
  plugins: [],
};
export default config;
