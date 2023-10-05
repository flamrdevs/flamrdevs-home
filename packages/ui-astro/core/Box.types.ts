import * as Recipes from "@flamrdevs/ui/core/.recipes.css";
import * as Sprinkles from "@flamrdevs/ui/core/.sprinkles.css";

import type * as Polymorphic from "./../polymorphic";

export type BoxPolymorphicProps<As extends Polymorphic.As> = Polymorphic.Props<
	As,
	Recipes.TypographyVariants &
		Sprinkles.LayoutShorthandsVariants &
		Sprinkles.PositionShorthandsVariants &
		Sprinkles.MarginShorthandsVariants &
		Sprinkles.PaddingShorthandsVariants
>;
