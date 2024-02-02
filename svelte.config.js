import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		alias: {
			$appTheme: './src/apptheme.css',
			$appCss: './src/app.postcss',
			$cv: './src/cv.json',
			'$components/*': './src/lib/components/*',
			'$sections/*': './src/lib/sections/*'
		}
	}
};

export default config;
