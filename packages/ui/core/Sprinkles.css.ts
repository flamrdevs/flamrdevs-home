import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const SCREEN = {
	xs: "640px",
	sm: "768px",
	md: "1024px",
	lg: "1280px",
	xl: "1536px",
};

const CONDITIONS = {
	base: {},
	xs: { "@media": `screen and (min-width: ${SCREEN.xs})` },
	sm: { "@media": `screen and (min-width: ${SCREEN.sm})` },
	md: { "@media": `screen and (min-width: ${SCREEN.md})` },
	lg: { "@media": `screen and (min-width: ${SCREEN.lg})` },
	xl: { "@media": `screen and (min-width: ${SCREEN.xl})` },
} as const;

const DEFAULTCONDITION = "base" satisfies keyof typeof CONDITIONS;

const SPACE = {
	none: 0,
	xs: "0.2rem",
	sm: "0.6rem",
	md: "1.0rem",
	lg: "1.4rem",
	xl: "1.8rem",
};

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

type GapVariants = Parameters<typeof Gap>[0];
type GapShorthandsVariants = Omit<GapVariants, "rowGap" | "columnGap">;
const GapProperties = defineProperties({
	conditions: CONDITIONS,
	defaultCondition: DEFAULTCONDITION,
	properties: {
		gap: SPACE,
		rowGap: SPACE,
		columnGap: SPACE,
	},
	shorthands: {
		gapr: ["rowGap"],
		gapc: ["columnGap"],
	},
});
const Gap = createSprinkles(GapProperties);

export type { MarginShorthandsVariants, PaddingShorthandsVariants, GapShorthandsVariants };
export { SCREEN };
export { Margin, Padding, Gap };
