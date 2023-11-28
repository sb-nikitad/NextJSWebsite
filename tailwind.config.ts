import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      backgroundColor: {
        "sb-main-dark-blue": "#0B1123",
        "sb-darkblue": "#050A30",
        "sb-blue": "#3B46FF",
        "sb-lightpurple": "#8D9FFF",
        "sb-lowpurple": "#5b41fd",
      },
      textColor: { "sb-lowpurple": "#5b41fd", "sb-blue": "#3B46FF" },
      borderColor: {
        "sb-darkblue": "#050A30",
        "sb-blue": "#3B46FF",
        "sb-lightpurple": "#8D9FFF",
        "sb-purple": "#7F39FB",
      },
      transitionProperty: {
        bg: "background-color",
      },
      boxShadow: {
        "sb-blue": "0 5px 20px #30419e",
      },
    },
  },
  plugins: [],
};
export default config;
