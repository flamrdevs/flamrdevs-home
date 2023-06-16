import { globalStyle } from "@vanilla-extract/css";

import { ColorsContract } from "./contract.css";

import * as FONTS from "./fonts";

globalStyle("html", {
	WebkitTapHighlightColor: "transparent",
});

globalStyle("body", {
	backgroundColor: ColorsContract.neutral[1],
	color: ColorsContract.neutral[12],
});

globalStyle("#root", {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "100vw",
	height: "100vh",
	overflow: "hidden",
});

globalStyle("#head", {
	fontFamily: FONTS.MONO,
	fontSize: "1.5rem",
	fontWeight: 700,
});
