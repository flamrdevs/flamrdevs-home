import { style } from "@vanilla-extract/css";

import { componentStateStyles } from "@kobalte/vanilla-extract";

import { ColorsContract } from "./../styles/contract.css";

const Root = style([
	{
		color: "hsl(211 96% 42%)",
		fontWeight: 600,
		outline: "1px solid transparent",
		outlineOffset: 1,

		":hover": {
			textDecoration: "underline",
		},

		":focus-visible": {
			outlineColor: ColorsContract.neutral[11],
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
