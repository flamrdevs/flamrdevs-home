import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const SCREEN = {
	xs: "640px",
	sm: "768px",
	md: "1024px",
	lg: "1280px",
	xl: "1536px",
};

const CONDITIONS = {
	__: {},
	xs: { "@media": `screen and (min-width: ${SCREEN.xs})` },
	sm: { "@media": `screen and (min-width: ${SCREEN.sm})` },
	md: { "@media": `screen and (min-width: ${SCREEN.md})` },
	lg: { "@media": `screen and (min-width: ${SCREEN.lg})` },
	xl: { "@media": `screen and (min-width: ${SCREEN.xl})` },
} as const;

const DEFAULTCONDITION = "__" satisfies keyof typeof CONDITIONS;

const SPACE = {
	"0": 0,
	"1": "0.25rem",
	"2": "0.5rem",
	"3": "0.75rem",
	"4": "1rem",
	"5": "1.25rem",
	"6": "1.5rem",
	"7": "1.75rem",
	"8": "2rem",
	"9": "2.25rem",
	"10": "2.5rem",
	"11": "2.75rem",
	"12": "3rem",
	"14": "3.5rem",
	"16": "4rem",
};

type DisplayVariants = Parameters<typeof Display>[0];
type DisplayShorthandsVariants = Omit<DisplayVariants, "display">;
const DisplayProperties = defineProperties({
	conditions: CONDITIONS,
	defaultCondition: DEFAULTCONDITION,
	properties: {
		display: {
			none: {
				display: "none",
			},
			block: {
				display: "block",
			},
			iblock: {
				display: "inline-block",
			},
			flex: {
				display: "flex",
			},
			iflex: {
				display: "inline-flex",
			},
		},
	},
	shorthands: {
		d: ["display"],
	},
});
const Display = createSprinkles(DisplayProperties);

type AlignVariants = Parameters<typeof Align>[0];
type AlignShorthandsVariants = Omit<AlignVariants, "alignItems">;
const AlignProperties = defineProperties({
	conditions: CONDITIONS,
	defaultCondition: DEFAULTCONDITION,
	properties: {
		alignItems: {
			start: {
				alignItems: "flex-start",
			},
			center: {
				alignItems: "center",
			},
			end: {
				alignItems: "flex-end",
			},
			strect: {
				alignItems: "strect",
			},
		},
	},
	shorthands: {
		ai: ["alignItems"],
	},
});
const Align = createSprinkles(AlignProperties);

type JustifyVariants = Parameters<typeof Justify>[0];
type JustifyShorthandsVariants = Omit<JustifyVariants, "justifyContent">;
const JustifyProperties = defineProperties({
	conditions: CONDITIONS,
	defaultCondition: DEFAULTCONDITION,
	properties: {
		justifyContent: {
			start: {
				justifyContent: "flex-start",
			},
			center: {
				justifyContent: "center",
			},
			end: {
				justifyContent: "flex-end",
			},
			around: {
				justifyContent: "space-around",
			},
			between: {
				justifyContent: "space-between",
			},
			evenly: {
				justifyContent: "space-evenly",
			},
		},
	},
	shorthands: {
		jc: ["justifyContent"],
	},
});
const Justify = createSprinkles(JustifyProperties);

type GapVariants = Parameters<typeof Gap>[0];
type GapShorthandsVariants = Omit<GapVariants, "columnGap" | "rowGap">;
const GapProperties = defineProperties({
	conditions: CONDITIONS,
	defaultCondition: DEFAULTCONDITION,
	properties: {
		gap: SPACE,
		columnGap: SPACE,
		rowGap: SPACE,
	},
	shorthands: {
		gapx: ["columnGap"],
		gapy: ["rowGap"],
	},
});
const Gap = createSprinkles(GapProperties);

type MarginVariants = Parameters<typeof Margin>[0];
type MarginShorthandsVariants = Omit<MarginVariants, "marginTop" | "marginRight" | "marginBottom" | "marginLeft">;
const MarginProperties = defineProperties({
	conditions: CONDITIONS,
	defaultCondition: DEFAULTCONDITION,
	properties: {
		marginTop: SPACE,
		marginRight: SPACE,
		marginBottom: SPACE,
		marginLeft: SPACE,
	},
	shorthands: {
		m: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
		mx: ["marginRight", "marginLeft"],
		my: ["marginTop", "marginBottom"],
		mt: ["marginTop"],
		mr: ["marginRight"],
		mb: ["marginBottom"],
		ml: ["marginLeft"],
	},
});
const Margin = createSprinkles(MarginProperties);

type PaddingVariants = Parameters<typeof Padding>[0];
type PaddingShorthandsVariants = Omit<PaddingVariants, "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft">;
const PaddingProperties = defineProperties({
	conditions: CONDITIONS,
	defaultCondition: DEFAULTCONDITION,
	properties: {
		paddingTop: SPACE,
		paddingRight: SPACE,
		paddingBottom: SPACE,
		paddingLeft: SPACE,
	},
	shorthands: {
		p: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
		px: ["paddingRight", "paddingLeft"],
		py: ["paddingTop", "paddingBottom"],
		pt: ["paddingTop"],
		pr: ["paddingRight"],
		pb: ["paddingBottom"],
		pl: ["paddingLeft"],
	},
});
const Padding = createSprinkles(PaddingProperties);

const DisplayKeys = ["d"] as const satisfies readonly (keyof DisplayShorthandsVariants)[];
const AlignKeys = ["ai"] as const satisfies readonly (keyof AlignShorthandsVariants)[];
const JustifyKeys = ["jc"] as const satisfies readonly (keyof JustifyShorthandsVariants)[];
const GapKeys = ["gap", "gapx", "gapy"] as const satisfies readonly (keyof GapShorthandsVariants)[];
const MarginKeys = ["m", "mx", "my", "mt", "mr", "mb", "ml"] as const satisfies readonly (keyof MarginShorthandsVariants)[];
const PaddingKeys = ["p", "px", "py", "pt", "pr", "pb", "pl"] as const satisfies readonly (keyof PaddingShorthandsVariants)[];

export type { DisplayShorthandsVariants, AlignShorthandsVariants, JustifyShorthandsVariants, GapShorthandsVariants, MarginShorthandsVariants, PaddingShorthandsVariants };
export { SCREEN };
export { Display, Align, Justify, Gap, Margin, Padding };
export { DisplayKeys, AlignKeys, JustifyKeys, GapKeys, MarginKeys, PaddingKeys };
