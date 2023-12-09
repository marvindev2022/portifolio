/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     
      screens: {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        hd: "90.01rem",
      },
      height: {
        hsm: "20rem",
        hmd: "24rem",
        hlg: "32rem",
        hxl: "40rem",
      },

      colors: {
       dark: "#1A1A1A", 
       light: "#FFFFFF",

      },
      boxShadow: {
        around:
          "0 3.7288rem 11.5284rem #00000015, 0 1.5578rem 4.8163rem #0000001e, 0 .8329rem 2.575rem #00000025, 0 .4669rem 1.4435rem #0000002c, 0 .248rem .7667rem #00000035, 0 .1032rem .319rem #0000004a;",
        modal:
          "0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.10), 0rem .25rem .5rem 0rem rgba(0, 0, 0, 0.10), 0rem .9375rem .9375rem 0rem rgba(0, 0, 0, 0.09), 0rem 2.0625rem 1.25rem 0rem rgba(0, 0, 0, 0.05), 0rem 3.6875rem 1.5rem 0rem rgba(0, 0, 0, 0.01), 0rem 5.75rem 1.625rem 0rem rgba(0, 0, 0, 0.00);",
      },
      fontFamily: {
        main: ["Lobster"],
        special: ["Fira Sans"],
        secondary: ["Inter"],
      },
    },
    
  },
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.tsx"],
  plugins: [],
};
