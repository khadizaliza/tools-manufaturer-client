module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        manufacturertheme: {
          primary: "#D926A9",
          secondary: "#a991f7",
          accent: "#1FB2A6",
          neutral: "#FBBD23",
          info: "#3ABFF8",
          warning: "#FBBD23",
          "base-100": "#ffffff",
        },
      },
      // 'light',
     
    ],
  },
  plugins: [require("daisyui")],
}