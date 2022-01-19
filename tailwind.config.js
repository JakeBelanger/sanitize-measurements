const tailwindcss = require("tailwindcss");

module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: ["@tailwindcss/form"],
};
