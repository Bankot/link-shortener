// Webpack uses this to work with directories
const path = require("path")
module.exports = {
	entry: "/script.js",

	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "",
		filename: "bundle.js",
	},

	mode: "development",
}
