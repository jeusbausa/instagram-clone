const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	purge: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
		},
		screens: {
			xss: '320px',
			xs: '475px',
			...defaultTheme.screens,
		},
		extend: {
			borderWidth: {},
			fontFamily: {
				sans: ['"Segoe UI"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		animation: ['responsive', 'motion-safe', 'motion-reduce'],
		extend: {
			backgroundColor: ['active'],
			textDecoration: ['active', 'hover'],
		},
	},
	plugins: [],
}
