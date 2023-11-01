import { klass } from "@klass/core";
import type { VariantsOf } from "@klass/core";

import * as _styles from "./Container.klass.styles.css.ts";

type Variants = VariantsOf<typeof Root>;

const Root = klass({
	base: _styles.Root_base,
	variants: {
		max: {
			xs: _styles.Root_variants_max_xs,
			sm: _styles.Root_variants_max_sm,
			md: _styles.Root_variants_max_md,
			lg: _styles.Root_variants_max_lg,
			xl: _styles.Root_variants_max_xl,
		},
	},
});

export type { Variants };
export { Root };
