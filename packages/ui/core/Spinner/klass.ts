import { klass } from "@klass/core";
import type { VariantsOf } from "@klass/core";

import * as _styles from "./klass.styles.css.ts";

type Variants = VariantsOf<typeof Root>;

const Root = klass({
	base: _styles.Root_base,
	variants: {
		size: {
			sm: _styles.Root_variants_size_sm,
			md: _styles.Root_variants_size_md,
			lg: _styles.Root_variants_size_lg,
		},
	},
	defaultVariants: {
		size: "md",
	},
});

const GStyle = _styles.G;

const CircleStyle = _styles.Circle;

export type { Variants };
export { Root, GStyle, CircleStyle };
