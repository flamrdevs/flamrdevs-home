import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

import * as COLORS from "./colors";

const ColorsContract = createGlobalThemeContract({
	neutral: {
		1: "neutral-1",
		2: "neutral-2",
		3: "neutral-3",
		4: "neutral-4",
		5: "neutral-5",
		6: "neutral-6",
		7: "neutral-7",
		8: "neutral-8",
		9: "neutral-9",
		10: "neutral-10",
		11: "neutral-11",
		12: "neutral-12",
	},
});

createGlobalTheme(`:root, [data-theme="light"]`, ColorsContract, {
	neutral: COLORS.GRAY.LIGHT,
});

createGlobalTheme(`[data-theme="dark"]`, ColorsContract, {
	neutral: COLORS.GRAY.DARK,
});

export { ColorsContract };
