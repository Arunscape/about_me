module.exports = {
  mode: "jit",
  //darkMode: "class",
  content: [
    "./src/**/*.{html,rs}",
    "./**.{html,css,scss}",
  ],
  theme: {
      extend: {},
  },
  //safelist: [
	//	{
	//		pattern: /(bg|text)-.+/
	//	},
	//	'mocha',
	//	'macchiato',
	//	'frappe',
	//	'latte'
	//],
  plugins: [
    require("@catppuccin/tailwindcss")({
      // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
      // default is `false`, which means no prefix
      // which flavour of colours to use by default, in the `:root`
      //defaultFlavour: "mocha",
    }),
  ],
}
