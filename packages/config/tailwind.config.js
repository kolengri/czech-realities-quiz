const { resolve } = require("path")

module.exports = {
  content: [
    "src/**/*.{js,jsx,ts,tsx}",
    resolve(__dirname, "../ui/src/**/*.{js,jsx,ts,tsx}"),
    resolve(__dirname, "../../app/web/src/**/*.{js,jsx,ts,tsx}"),
  ],
  mode: "jit",
}
