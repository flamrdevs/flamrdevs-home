import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import * as ContainerRecipe from "@flamrdevs/ui/core/Container.recipe.css.ts";
import * as Recipes from "@flamrdevs/ui/core/.recipes.css.ts";
import * as Sprinkles from "@flamrdevs/ui/core/.sprinkles.css.ts";

import * as Classes from "../classes.ts";
import * as Polymorphic from "../polymorphic.ts";

type BoxOptions = Classes.WithProps<
	Recipes.TypographyVariants &
		Sprinkles.LayoutShorthandsVariants &
		Sprinkles.PositionShorthandsVariants &
		Sprinkles.MarginShorthandsVariants &
		Sprinkles.PaddingShorthandsVariants
>;

const Box = ((props) => {
	const [polymorphic, classes, typography, layout, position, margin, padding, rest] = splitProps(
		props,
		Polymorphic.Keys,
		Classes.Keys,
		Recipes.TypographyKeys,
		Sprinkles.LayoutKeys,
		Sprinkles.PositionKeys,
		Sprinkles.MarginKeys,
		Sprinkles.PaddingKeys
	);

	return (
		<Dynamic
			component={polymorphic.as ?? "div"}
			{...rest}
			class={Classes.x([Recipes.Typography(typography), Sprinkles.Layout(layout), Sprinkles.Position(position), Sprinkles.Margin(margin), Sprinkles.Padding(padding)], classes)}
		/>
	);
}) as Polymorphic.Component<"div", BoxOptions>;

const BlockKeys = ["inline", "disp"] as const;

const Block = ((props) => {
	const [local, rest] = splitProps(props, BlockKeys);
	return <Box disp={local.disp ?? (local.inline ? "iblock" : "block")} {...(rest as BoxOptions)} />;
}) as Polymorphic.Component<typeof Box, BoxOptions & { inline?: boolean }>;

const FlexKeys = ["inline", "disp"] as const;

const Flex = ((props) => {
	const [local, rest] = splitProps(props, FlexKeys);
	return <Box disp={local.disp ?? (local.inline ? "iflex" : "flex")} {...(rest as BoxOptions)} />;
}) as Polymorphic.Component<typeof Box, BoxOptions & { inline?: boolean }>;

const CenterKeys = ["inline", "disp", "ai", "jc"] as const;

const Center = ((props) => {
	const [local, rest] = splitProps(props, CenterKeys);
	return <Box disp={local.disp ?? (local.inline ? "iflex" : "flex")} ai={local.ai ?? "-:-"} jc={local.jc ?? "-:-"} {...(rest as BoxOptions)} />;
}) as Polymorphic.Component<typeof Box, BoxOptions & { inline?: boolean }>;

const GridKeys = ["inline", "disp"] as const;

const Grid = ((props) => {
	const [local, rest] = splitProps(props, GridKeys);
	return <Box disp={local.disp ?? (local.inline ? "igrid" : "grid")} {...(rest as BoxOptions)} />;
}) as Polymorphic.Component<typeof Box, BoxOptions & { inline?: boolean }>;

type ContainerOptions = Classes.WithProps<ContainerRecipe.Variants & Sprinkles.MarginShorthandsVariants & Sprinkles.PaddingShorthandsVariants>;

const Container = ((props) => {
	const [polymorphic, classes, recipe, margin, padding, rest] = splitProps(
		props,
		Polymorphic.Keys,
		Classes.Keys,
		ContainerRecipe.RootKeys,
		Sprinkles.MarginKeys,
		Sprinkles.PaddingKeys
	);
	return (
		<Dynamic component={polymorphic.as ?? "div"} {...rest} class={Classes.x([ContainerRecipe.Root(recipe), Sprinkles.Margin(margin), Sprinkles.Padding(padding)], classes)} />
	);
}) as Polymorphic.Component<"div", ContainerOptions>;

export { Box, Block, Flex, Center, Grid, Container };
