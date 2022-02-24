const withTM = require("next-transpile-modules")(["ui", "utils", "models"])

module.exports = withTM({
  reactStrictMode: true,
})
