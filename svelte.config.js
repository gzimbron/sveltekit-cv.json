import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		alias: {
			$appTheme: './src/apptheme.css',
			$appCss: './src/app.postcss',
			'$components/*': './src/lib/components/*'
		}
	}
};

export default config;
