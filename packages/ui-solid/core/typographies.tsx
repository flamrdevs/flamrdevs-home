import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import * as Recipes from "@flamrdevs/ui/core/.recipes.css.ts";
import * as Sprinkles from "@flamrdevs/ui/core/.sprinkles.css.ts";

import * as Classes from "../classes.ts";
import * as Polymorphic from "../polymorphic.ts";

type TextOptions = Classes.WithProps<
	{
		family?: Recipes.TypographyVariants["ff"];
		size?: Recipes.TypographyVariants["fz"];
		weight?: Recipes.TypographyVariants["fw"];
		align?: Recipes.TypographyVariants["ta"];
		italic?: boolean;
	} & Sprinkles.MarginShorthandsVariants &
		Sprinkles.PaddingShorthandsVariants
>;

const TextKeys = ["family", "size", "weight", "align", "italic"] as const;

const Text = ((props) => {
	const [polymorphic, classes, local, margin, padding, rest] = splitProps(props, Polymorphic.Keys, Classes.Keys, TextKeys, Sprinkles.MarginKeys, Sprinkles.PaddingKeys);

	return (
		<Dynamic
			component={polymorphic.as ?? "div"}
			{...rest}
			class={Classes.x(
				[
					Recipes.Typography({
						ff: local.family ?? "sans",
						fz: local.size ?? "3",
						fs: local.italic ? "i" : "n",
						fw: local.weight ?? "4",
						ta: local.align ?? ":--",
					}),
					Sprinkles.Margin(margin),
					Sprinkles.Padding(padding),
				],
				classes
			)}
		/>
	);
}) as Polymorphic.Component<"div", TextOptions>;

export { Text };
