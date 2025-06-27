// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        "float-slow": "floatSlow 18s ease-in-out infinite",
        "float-fast": "floatFast 10s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-20px) translateX(10px)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-40px) translateX(-15px)" },
        },
      },
    },
  },
};
