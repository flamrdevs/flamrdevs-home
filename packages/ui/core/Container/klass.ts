import { klass } from "@klass/core";
import type { VariantsOf } from "@klass/core";

import * as _styles from "./klass.styles.css.ts";

type Variants = VariantsOf<typeof Root>;

const Root = klass({
	base: _styles.Root_base,
	variants: {
		max: {
			sm: _styles.Root_variants_max_sm,
			md: _styles.Root_variants_max_md,
			lg: _styles.Root_variants_max_lg,
		},
	},
});

export type { Variants };
export { Root };
