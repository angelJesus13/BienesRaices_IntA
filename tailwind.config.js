/** @type {import('tailwindcss').Config} */
export default {
	content: ['./views/**/*.pug'],
	theme: {
	  extend: {
		maxHeight: {
		  'space': '690px',
		},
		colors: {
		  redNCS: {
			light: '#ff455e',
			DEFAULT: '#ff1b3a',
		  },
		  lightRedNCS: {
			DEFAULT: '#fff2f4',
		  },
		  roseTaupe: {
			DEFAULT: '#e58b8b',
		  },
		  taupeGray: {
			DEFAULT: '#c3b3b3',
		  },
		  white: {
			DEFAULT: '#fff',
			dark: '#f7f7f7',
		  },
		  // Incorporando los colores de angelPaleta
		  customGreen: '#91CB3E', // custom-green
		  customGreenHover: '#53A548', // custom-green-hover
		  customBlackHover: '#000000', // custom-black-hover
		  customSeaGreen: '#4C934C', // custom-sea-green
		  lightGray: '#f7f7f7', // light-gray
		  darkGray: '#333333', // dark-gray
		},
		keyframes: {
		  fadeUp: {
			'0%': {
			  display: 'block',
			  opacity: '0',
			  transform: 'translateY(-20px)',
			},
			'10%': {
			  opacity: '1',
			  transform: 'translateY(0)',
			},
			'90%': {
			  opacity: '1',
			  transform: 'translateY(0)',
			},
			'100%': {
			  opacity: '0',
			  transform: 'translateY(20px)',
			  display: 'none',
			},
		  },
		  displayNone: {
			'0%': {
			  display: 'block',
			  marginTop: '-120px',
			},
			'100%': {
			  display: 'none',
			  marginTop: '-120px',
			},
		  },
		  fadeUpWithoutDown: {
			'0%': {
			  display: 'block',
			  opacity: '0',
			  transform: 'translateY(-20px)',
			},
			'10%': {
			  opacity: '1',
			  transform: 'translateY(0)',
			},
			'100%': {
			  opacity: '1',
			  transform: 'translateY(0)',
			},
		  },
		},
		animation: {
		  anim1: 'fadeUp 7s ease-in-out',
		  anim2: 'displayNone 7s',
		  anim3: 'fadeUpWithoutDown 7s ease-in-out',
		},
	  },
	},
	plugins: [],
};
