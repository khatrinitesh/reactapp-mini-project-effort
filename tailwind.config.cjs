module.exports = {
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#1B73E8',
            },
            fontFamily: {
                latoRegular: "Lato-Regular",
                latoBold: "Lato-Bold",
              },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};