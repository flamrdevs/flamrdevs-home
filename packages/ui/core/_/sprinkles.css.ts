import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const SCREEN = {
	sm: "512px",
	md: "896px",
	lg: "1536px",
};

const CONDITIONS = {
	__: {},
	sm: { "@media": `screen and (min-width: ${SCREEN.sm})` },
	md: { "@media": `screen and (min-width: ${SCREEN.md})` },
	lg: { "@media": `screen and (min-width: ${SCREEN.lg})` },
} as const;

const DEFAULTCONDITION = "__" satisfies keyof typeof CONDITIONS;

const SPACE = {
	"0": "0",
	"1": "0.25rem",
	"2": "0.5rem",
	"3": "0.75rem",
	"4": "1rem",
	"5": "1.25rem",
	"6": "1.5rem",
	"7": "1.75rem",
	"8": "2rem",
};

type LayoutVariants = Parameters<typeof Layout>[0];
type LayoutShorthandsVariants = Omit<LayoutVariants, "display" | "alignItems" | "justifyContent">;
const LayoutProperties = defineProperties({
	conditions: CONDITIONS,
	defaultCondition: DEFAULTCONDITION,
	properties: {
		display: {
			none: "none",
			block: "block",
			iblock: "inline-block",
			flex: "flex",
			iflex: "inline-flex",
			grid: "grid",
			igrid: "inline-grid",
		},
		alignItems: {
			":--": "flex-start",
			"-:-": "center",
			"--:": "flex-end",
			":::": "stretch",
		},
		justifyContent: {
			":--": "flex-start",
			"-:-": "center",
			"--:": "flex-end",
			":::": "stretch",
			around: "space-around",
			between: "space-between",
			evenly: "space-evenly",
		},
		gap: SPACE,
	},
	shorthands: {
		disp: ["display"],
		ai: ["alignItems"],
		jc: ["justifyContent"],
	},
});
const Layout = createSprinkles(LayoutProperties);

type PositionVariants = Parameters<typeof Position>[0];
type PositionShorthandsVariants = Omit<PositionVariants, "position" | "zIndex">;
const PositionProperties = defineProperties({
	conditions: CONDITIONS,
	defaultCondition: DEFAULTCONDITION,
	properties: {
		position: {
			rel: "relative",
			abs: "absolute",
			fix: "fixed",
			sty: "sticky",
		},
		zIndex: {
			"-1": -10,
			"0": 0,
			"1": 10,
			"2": 20,
			"3": 30,
			"4": 40,
			"5": 50,
		},
		top: SPACE,
		right: SPACE,
		bottom: SPACE,
		left: SPACE,
	},
	shorthands: {
		posi: ["position"],
		zi: ["zIndex"],
	},
});
const Position = createSprinkles(PositionProperties);

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

const LayoutKeys = ["disp", "ai", "jc", "gap"] as const satisfies readonly (keyof LayoutShorthandsVariants)[];
const PositionKeys = ["posi", "zi", "top", "right", "bottom", "left"] as const satisfies readonly (keyof PositionShorthandsVariants)[];
const MarginKeys = ["m", "mx", "my", "mt", "mr", "mb", "ml"] as const satisfies readonly (keyof MarginShorthandsVariants)[];
const PaddingKeys = ["p", "px", "py", "pt", "pr", "pb", "pl"] as const satisfies readonly (keyof PaddingShorthandsVariants)[];

export type { LayoutShorthandsVariants, PositionShorthandsVariants, MarginShorthandsVariants, PaddingShorthandsVariants };
export { SCREEN };
export { Layout, Position, Margin, Padding };
export { LayoutKeys, PositionKeys, MarginKeys, PaddingKeys };
