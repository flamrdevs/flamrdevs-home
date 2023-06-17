import { style } from "@vanilla-extract/css";
import { ColorsContract } from "./styles/contract.css";

const Root = style({
	display: "block",
	border: "none",
	margin: 0,
	padding: 0,
	backgroundColor: ColorsContract.neutral[5],

	selectors: {
		[`&[data-orientation="horizontal"]`]: {
			width: "auto",
			height: 1,
		},
		[`&[data-orientation="vertical"]`]: {
			width: 1,
			height: "auto",
		},
	},
});

export { Root };
