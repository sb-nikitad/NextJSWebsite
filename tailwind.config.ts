import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "sb-darkblue": "#050A30",
        "sb-blue": "#3B46FF",
        "sb-lightpurple": "#8D9FFF",
        "sb-lowpurple": "#5b41fd",
      },
      borderColor: {
        "sb-darkblue": "#050A30",
        "sb-blue": "#3B46FF",
        "sb-lightpurple": "#8D9FFF",
        "sb-purple": "#7F39FB",
      },
      transitionProperty: {
        bg: "background-color",
      },
    },
  },
  plugins: [],
};
export default config;
