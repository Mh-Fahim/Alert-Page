// const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      screens: {
        lg: "1024px",
        md: "900px",
        xsm: "450px",
      },
    },
  },
  plugins: [],
};
