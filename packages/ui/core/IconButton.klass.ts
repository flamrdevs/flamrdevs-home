import { klass } from "@klass/core";
import type { VariantsOf } from "@klass/core";

import * as BaseButtonStyle from "./BaseButton.style.css.ts";

import * as _styles from "./IconButton.klass.styles.css.ts";

type Variants = VariantsOf<typeof Root>;

const Root = klass({
	base: BaseButtonStyle.Root,
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

export type { Variants };
export { Root };
