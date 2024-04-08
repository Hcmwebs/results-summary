/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: 'hsla(252,100%,67%,1)',
					secondary: 'hsla(241,81%,54%,1)',
					accent: '#37cdbe',
					neutral: 'hsla(241,100%,89%,1)',
					'base-100': 'hsla(0,0%,100%,1)',
					black: 'hsla(223,30%,27,1)',
				},
			},
			'dark',
			'cupcake',
		],
	},
};
