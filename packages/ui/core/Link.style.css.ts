import { style } from "@vanilla-extract/css";

import { ColorsContract } from "./../styles/contract.css.ts";

const Root = style({
	color: ColorsContract.info[9],
	fontWeight: 600,
	outline: "1px solid transparent",
	outlineOffset: 1,
	padding: 1,
	borderRadius: "0.25rem",

	":hover": {
		textDecorationLine: "underline",
	},

	":focus-visible": {
		outlineColor: ColorsContract.info[10],
	},

	selectors: {
		"&[data-disabled]": {
			opacity: 0.7,
			textDecorationLine: "none",
			cursor: "not-allowed",
		},
	},
});

export { Root };
