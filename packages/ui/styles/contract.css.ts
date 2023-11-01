import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

import * as COLORS from "./colors/index.ts";

const colors = createGlobalThemeContract({
	cn: {
		1: "cn-1",
		2: "cn-2",
		3: "cn-3",
		4: "cn-4",
		5: "cn-5",
		6: "cn-6",
		7: "cn-7",
		8: "cn-8",
		9: "cn-9",
		10: "cn-10",
		11: "cn-11",
		12: "cn-12",
	},
	cp: {
		1: "cp-1",
		2: "cp-2",
		3: "cp-3",
		4: "cp-4",
		5: "cp-5",
		6: "cp-6",
		7: "cp-7",
		8: "cp-8",
		9: "cp-9",
		10: "cp-10",
		11: "cp-11",
		12: "cp-12",
	},
	cs: {
		1: "cs-1",
		2: "cs-2",
		3: "cs-3",
		4: "cs-4",
		5: "cs-5",
		6: "cs-6",
		7: "cs-7",
		8: "cs-8",
		9: "cs-9",
		10: "cs-10",
		11: "cs-11",
		12: "cs-12",
	},
	ci: {
		1: "ci-1",
		2: "ci-2",
		3: "ci-3",
		4: "ci-4",
		5: "ci-5",
		6: "ci-6",
		7: "ci-7",
		8: "ci-8",
		9: "ci-9",
		10: "ci-10",
		11: "ci-11",
		12: "ci-12",
	},
	cw: {
		1: "cw-1",
		2: "cw-2",
		3: "cw-3",
		4: "cw-4",
		5: "cw-5",
		6: "cw-6",
		7: "cw-7",
		8: "cw-8",
		9: "cw-9",
		10: "cw-10",
		11: "cw-11",
		12: "cw-12",
	},
	cd: {
		1: "cd-1",
		2: "cd-2",
		3: "cd-3",
		4: "cd-4",
		5: "cd-5",
		6: "cd-6",
		7: "cd-7",
		8: "cd-8",
		9: "cd-9",
		10: "cd-10",
		11: "cd-11",
		12: "cd-12",
	},
});

createGlobalTheme(`:root, [data-theme="light"]`, colors, {
	cn: COLORS.NEUTRAL.LIGHT,
	cp: COLORS.PRIMARY.LIGHT,
	cs: COLORS.SUCCESS.LIGHT,
	ci: COLORS.INFO.LIGHT,
	cw: COLORS.WARNING.LIGHT,
	cd: COLORS.DANGER.LIGHT,
});

createGlobalTheme(`[data-theme="dark"]`, colors, {
	cn: COLORS.NEUTRAL.DARK,
	cp: COLORS.PRIMARY.DARK,
	cs: COLORS.SUCCESS.DARK,
	ci: COLORS.INFO.DARK,
	cw: COLORS.WARNING.DARK,
	cd: COLORS.DANGER.DARK,
});

export { colors };
