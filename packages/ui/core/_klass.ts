import { klass } from "@klass/core";
import type { VariantsOf } from "@klass/core";

import * as styles from "./../styles/styles.css.ts";

import * as _styles from "./_klass.styles.css.ts";

const __variants = "variants";
const __defaultVariants = "defaultVariants";

const __color = "color";

const __neutral = "neutral";
const __primary = "primary";
const __success = "success";
const __info = "info";
const __warning = "warning";
const __danger = "danger";

const DEFAULT_COLORS_VARIANTS = {
	[__color]: __neutral,
} as const;

type Color2Variants = VariantsOf<typeof Color2>;

const Color2 = klass({
	[__variants]: {
		[__color]: {
			[__neutral]: styles.varsNeutral,
			[__primary]: styles.varsPrimary,
		},
	},
	[__defaultVariants]: DEFAULT_COLORS_VARIANTS,
});

type Color6Variants = VariantsOf<typeof Color6>;

const Color6 = klass({
	[__variants]: {
		[__color]: {
			[__neutral]: styles.varsNeutral,
			[__primary]: styles.varsPrimary,
			[__success]: styles.varsSuccess,
			[__info]: styles.varsInfo,
			[__warning]: styles.varsWarning,
			[__danger]: styles.varsDanger,
		},
	},
	[__defaultVariants]: DEFAULT_COLORS_VARIANTS,
});

type TypographyVariants = VariantsOf<typeof Typography>;

const Typography = klass({
	[__variants]: {
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
