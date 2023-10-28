import { mergeProps, splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as BadgeRecipe from "@flamrdevs/ui/core/Badge.recipe.css.ts";
import * as Recipes from "@flamrdevs/ui/core/.recipes.css.ts";

import * as Icons from "@flamrdevs/ui/icons/shared.ts";

import * as Classes from "../classes.ts";

type BadgeProps = Classes.WithProps<JSX.IntrinsicElements["span"] & BadgeRecipe.Variants & Recipes.Color6Variants>;

const Badge = (props: BadgeProps) => {
	const [classes, recipe, color, rest] = splitProps(props, Classes.Keys, BadgeRecipe.RootKeys, Recipes.Color6Keys);
	return <span {...rest} class={Classes.x([BadgeRecipe.Root(recipe), Recipes.Color6(color)], classes)} />;
};

type IconProps = Omit<JSX.SvgSVGAttributes<SVGSVGElement>, keyof Icons.ComponentProps> & Icons.ComponentProps;

const DefaultIconProps = {
	i: Icons.DEFAULT_ICON,
	size: Icons.DEFAULT_SIZE,
	class: Icons.DEFAULT_CLASS,
} satisfies Icons.ComponentProps & { class: string };

const IconKeys = ["i", "class", "size"] as const;

const DimensionKeys = ["width", "height"] as const;

const Icon = (props: IconProps) => {
	const [local, dimension, other] = splitProps(mergeProps(DefaultIconProps, props), IconKeys, DimensionKeys);

	return (
		<svg
			viewBox="0 0 24 24"
			stroke="currentColor"
			{...mergeProps({ width: local.size, height: local.size } satisfies { [K in (typeof DimensionKeys)[number]]?: string | number }, dimension)}
			{...other}
			class={`lucide ${local.class}`}
		>
			<use href={`${Icons.href}${local.i}`} />
		</svg>
	);
};

export { Badge, Icon };
