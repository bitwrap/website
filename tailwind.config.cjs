/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily :{
				"exo-2": ["'Exo 2'", "sans-serif"],
				lato: ["Lato", "sans-serif"],
			}
		},
	},
	plugins: [],
}
