module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      fontFamily:{
        pkmn: ["PKMN", "sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}
