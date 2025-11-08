module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        jet: "#0B0B0B",
        cream: "#F5F2E9",
        royal: "#C6A664",
        shadow: "#3C3C3C",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(198,166,100,0.25), 0 8px 24px rgba(198,166,100,0.15)",
      },
      backgroundImage: {
        hero: "radial-gradient(60% 60% at 50% 0%, rgba(198,166,100,0.18) 0%, rgba(11,11,11,0) 60%), linear-gradient(180deg, #0B0B0B 0%, #000 100%)",
      },
    },
  },
  plugins: [],
};
