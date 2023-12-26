/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {      
			fontFamily: {
			sans: ["InterVariable", "Inter"],
		  },
		  colors: {
			primaryColor: 'var(--primary-color)',
			secondaryColor: 'var(--secondary-color)',
			tertiaryColor: 'var(--tertiary-color)',
			primaryTextColor: 'var(--primary-text-color)',
			secondaryTextColor: 'var(--secondary-text-color)',
			tertiaryTextColor: 'var(--tertiary-text-color)',
			quaternaryTextColor: 'var(--quaternary-text-color)',
			primaryButtomColor: 'var(--primary-buttom-color)',
			primaryButtomTextColor: 'var(--primary-buttom-text-color)',
			secondaryButtomTextColor: 'var(--secondary-buttom-text-color)',
			secondaryButtomColor: 'var(--secondary-buttom-color)',

			navBarBgColor: 'var(--navbar-bg-color)',
			navBarBlur: 'var(--navbar-blur)',

			primaryBg: 'var(--primary-bg-color)',
			secondaryBg: 'var(--secondary-bg-color)',
			primaryGradient: 'var(--primary-gradient)',
			secondaryGradient: 'var(--secondary-gradient)',
			tertiaryGradient: 'var(--tertiary-gradient)',
		  },
		},
	},
	plugins: [ require('tailwindcss-animated')],
}
