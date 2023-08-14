import { style } from "@vanilla-extract/css";

import { componentStateStyles } from "@kobalte/vanilla-extract";

import { ColorsContract } from "./../styles/contract.css";

const Root = style([
	{
		color: ColorsContract.info[9],
		fontWeight: 600,
		outline: "1px solid transparent",
		outlineOffset: 1,
		padding: 1,
		borderRadius: "0.25rem",

		":hover": {
			textDecoration: "underline",
		},

		":focus-visible": {
			outlineColor: ColorsContract.info[10],
		},
	},
	componentStateStyles({
		disabled: {
			opacity: 0.7,
			cursor: "not-allowed",

			":hover": {
				textDecoration: "none",
			},
		},
	}),
]);

export { Root };
