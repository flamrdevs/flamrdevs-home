import { klass } from "@klass/core";
import type { VariantsOf } from "@klass/core";

import * as _styles from "./Badge.klass.styles.css.ts";

type Variants = VariantsOf<typeof Root>;

const Root = klass({
	base: _styles.Root_base,
	variants: {
		size: {
			md: _styles.Root_variants_size_md,
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type { Variants };
export { Root };
