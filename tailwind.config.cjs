/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontSize: {},
			fontFamily: {},
			colors: {}
		}
	},
	darkMode: 'class',
	daisyui: {
		themes: [
			{
				myCV: {
					primary: '#4b5563',
					secondary: '#0369a1',
					accent: '#a8a29e',
					neutral: '#030303',
					'base-100': '#fbffff',
					info: '#00c4ff',
					success: '#4ade80',
					warning: '#fb923c',
					error: '#f87171'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};

module.exports = config;
