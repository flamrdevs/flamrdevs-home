import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import * as klass from "@flamrdevs/ui/core/_klass.ts";
import * as Sprinkles from "@flamrdevs/ui/core/_sprinkles.css.ts";

import * as Classes from "../classes.ts";
import * as Polymorphic from "../polymorphic.ts";

type TextOptions = Classes.WithProps<
	{
		family?: klass.TypographyVariants["ff"];
		size?: klass.TypographyVariants["fz"];
		weight?: klass.TypographyVariants["fw"];
		align?: klass.TypographyVariants["ta"];
	} & Sprinkles.MarginShorthandsVariants &
		Sprinkles.PaddingShorthandsVariants
>;

const TextKeys = ["family", "size", "weight", "align"] as const;

const Text = ((props) => {
	const [polymorphic, classes, local, margin, padding, rest] = splitProps(props, Polymorphic.Keys, Classes.Keys, TextKeys, Sprinkles.MarginKeys, Sprinkles.PaddingKeys);

	return (
		<Dynamic
			component={polymorphic.as ?? "div"}
			{...rest}
			class={Classes.x(
				[
					klass.Typography({
						ff: local.family ?? "sans",
						fz: local.size ?? "3",
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

export type { TextOptions };
export { Text };
