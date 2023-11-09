import { klass } from "@klass/core";
import type { VariantsOf } from "@klass/core";

import * as _styles from "./klass.styles.css.ts";

type Variants = VariantsOf<typeof Root>;

const Root = klass({
	base: _styles.Root_base,
	variants: {
		margin: {
			"0": _styles.Root_variants_margin_0,
			"1": _styles.Root_variants_margin_1,
			"2": _styles.Root_variants_margin_2,
			"3": _styles.Root_variants_margin_3,
			"4": _styles.Root_variants_margin_4,
		},
	},
	defaultVariants: {
		margin: "1",
	},
});

export type { Variants };
export { Root };
