import { klass } from "@klass/core";
import type { VariantsOf } from "@klass/core";

import * as styles from "./../styles/styles.css.ts";

import * as _styles from "./_klass.styles.css.ts";

const DEFAULT_COLORS_VARIANTS = {
	color: "neutral",
} as const;

type Color2Variants = VariantsOf<typeof Color2>;

const Color2 = klass({
	variants: {
		color: {
			neutral: styles.varsNeutral,
			primary: styles.varsPrimary,
		},
	},
	defaultVariants: DEFAULT_COLORS_VARIANTS,
});

type Color6Variants = VariantsOf<typeof Color6>;

const Color6 = klass({
	variants: {
		color: {
			neutral: styles.varsNeutral,
			primary: styles.varsPrimary,
			success: styles.varsSuccess,
			info: styles.varsInfo,
			warning: styles.varsWarning,
			danger: styles.varsDanger,
		},
	},
	defaultVariants: DEFAULT_COLORS_VARIANTS,
});

type TypographyVariants = VariantsOf<typeof Typography>;

const Typography = klass({
	variants: {
		ff: {
			sans: _styles.Typography_variants_ff_font_sans,
			mono: _styles.Typography_variants_ff_font_mono,
		},
		fz: {
			"1": _styles.Typography_variants_fz_text_z1,
			"2": _styles.Typography_variants_fz_text_z2,
			"3": _styles.Typography_variants_fz_text_z3,
			"4": _styles.Typography_variants_fz_text_z4,
			"5": _styles.Typography_variants_fz_text_z5,
			"6": _styles.Typography_variants_fz_text_z6,
			"7": _styles.Typography_variants_fz_text_z7,
			"8": _styles.Typography_variants_fz_text_z8,
			"9": _styles.Typography_variants_fz_text_z9,
			"10": _styles.Typography_variants_fz_text_z10,
			"11": _styles.Typography_variants_fz_text_z11,
			"12": _styles.Typography_variants_fz_text_z12,
			"13": _styles.Typography_variants_fz_text_z13,
		},
		fw: {
			"2": _styles.Typography_variants_fw_font_w2,
			"3": _styles.Typography_variants_fw_font_w3,
			"4": _styles.Typography_variants_fw_font_w4,
			"5": _styles.Typography_variants_fw_font_w5,
			"6": _styles.Typography_variants_fw_font_w6,
			"7": _styles.Typography_variants_fw_font_w7,
			"8": _styles.Typography_variants_fw_font_w8,
		},
		ta: {
			":--": _styles.Typography_variants_ta_text_left,
			"-:-": _styles.Typography_variants_ta_text_center,
			"--:": _styles.Typography_variants_ta_text_right,
		},
	},
});

export type { Color2Variants, Color6Variants, TypographyVariants };
export { Color2, Color6, Typography };
