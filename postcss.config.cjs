const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnesting = require('@tailwindcss/nesting');
const config = {
	plugins: [
		cssnesting,
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};

module.exports = config;
