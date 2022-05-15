module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      fontFamily:{
        pkmn: ["PKMN", "sans-serif"]
      },
      colors:{
        "red": "#d3363f",
      },
    },
  },
  plugins: [require("daisyui")],
}
