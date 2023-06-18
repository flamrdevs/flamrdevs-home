import { globalStyle } from "@vanilla-extract/css";

import { ColorsContract } from "./contract.css";

globalStyle("html", {
	WebkitTapHighlightColor: "transparent",
});

globalStyle("body", {
	backgroundColor: ColorsContract.neutral[1],
	color: ColorsContract.neutral[12],
});

globalStyle(".fluent-icon", {
	color: "currentcolor",
});

globalStyle(".fluent-icon > path", {
	fill: "currentcolor",
});
