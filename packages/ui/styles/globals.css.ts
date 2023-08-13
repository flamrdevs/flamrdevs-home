import { globalStyle } from "@vanilla-extract/css";

import { SANS } from "./fonts";

import { ColorsContract } from "./contract.css";

globalStyle("html", {
	WebkitTapHighlightColor: "transparent",
});

globalStyle("body", {
	backgroundColor: ColorsContract.neutral[1],
	color: ColorsContract.neutral[12],
	fontFamily: SANS,
});

globalStyle(".lucide", {
	strokeWidth: 1.5,
	width: "1.25rem",
	height: "1.25rem",
});
