const { addDynamicIconSelectors } = require('@iconify/tailwind');
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],	
	theme: {
	  screens: {
		sm: "480px",
		md: "875px",
		lg: "976px",
		xl: "1440px",
		lx:"975px"
	  },
	  colors: {
		black: "#000000",
		white: "#FFFFFF",
		gray: "#0D0C22",
		stone: "#231F20",
		lime: "#B9FF66",
		zinc: {
		  100: "#F3F3F3",
		  200: "#F0F0F0",
		  300: "#D9D9D9",
		  400: "#D8D8D8",
		  500: "#898989",
		  600: "#B0B0B0",
		  700: "#787878",
		  800: "#292A32",
		  900: "#191A23",
		},
		red_light: "#F8F2C7", 
		red:"#FF0000",
		google_green:"#0F9D58",
		google_red:"#DB4437",
		google_yellow:"#F4B400",
		google_blue:"#4285F4",
		white_grey:"#F0EAEA"
	  },
	  extend: {
		fontFamily: {
		  SpaceGrotesk: ["Space Grotesk", "sans-serif"],
		   'sans': ['Roboto', 'sans-serif'],
         'serif': ['Roboto', 'serif'],
         'mono': ['Roboto Mono', 'monospace'],

		},
	  },
	},
	plugins: [
		// Iconify plugin
		addDynamicIconSelectors(),
	],
  };
  