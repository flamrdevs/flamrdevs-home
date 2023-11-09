import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import * as ContainerKlass from "@flamrdevs/ui/core/Container/klass.ts";
import * as klass from "@flamrdevs/ui/core/_/klass.ts";
import * as Sprinkles from "@flamrdevs/ui/core/_/sprinkles.css.ts";

import * as Classes from "../classes.ts";
import * as Polymorphic from "../polymorphic.ts";

type BoxOptions = Classes.WithProps<
	klass.TypographyVariants & Sprinkles.LayoutShorthandsVariants & Sprinkles.PositionShorthandsVariants & Sprinkles.MarginShorthandsVariants & Sprinkles.PaddingShorthandsVariants
>;

const Box = ((props) => {
	const [polymorphic, classes, typography, layout, position, margin, padding, rest] = splitProps(
		props,
		Polymorphic.Keys,
		Classes.Keys,
		klass.Typography.vk,
		Sprinkles.LayoutKeys,
		Sprinkles.PositionKeys,
		Sprinkles.MarginKeys,
		Sprinkles.PaddingKeys
	);

	return (
		<Dynamic
			component={polymorphic.as ?? "div"}
			{...rest}
			class={Classes.x([klass.Typography(typography), Sprinkles.Layout(layout), Sprinkles.Position(position), Sprinkles.Margin(margin), Sprinkles.Padding(padding)], classes)}
		/>
	);
}) as Polymorphic.Component<"div", BoxOptions>;

const BlockKeys = ["inline", "disp"] as const;

const Block = ((props) => {
	const [local, rest] = splitProps(props, BlockKeys);
	return <Box disp={local.disp ?? (local.inline ? "iblock" : "block")} {...(rest as BoxOptions)} />;
}) as Polymorphic.Component<"div", BoxOptions & { inline?: boolean }>;

const FlexKeys = ["inline", "disp"] as const;

const Flex = ((props) => {
	const [local, rest] = splitProps(props, FlexKeys);
	return <Box disp={local.disp ?? (local.inline ? "iflex" : "flex")} {...(rest as BoxOptions)} />;
}) as Polymorphic.Component<"div", BoxOptions & { inline?: boolean }>;

const CenterKeys = ["inline", "disp", "ai", "jc"] as const;

const Center = ((props) => {
	const [local, rest] = splitProps(props, CenterKeys);
	return <Box disp={local.disp ?? (local.inline ? "iflex" : "flex")} ai={local.ai ?? "-:-"} jc={local.jc ?? "-:-"} {...(rest as BoxOptions)} />;
}) as Polymorphic.Component<"div", BoxOptions & { inline?: boolean }>;

const GridKeys = ["inline", "disp"] as const;

const Grid = ((props) => {
	const [local, rest] = splitProps(props, GridKeys);
	return <Box disp={local.disp ?? (local.inline ? "igrid" : "grid")} {...(rest as BoxOptions)} />;
}) as Polymorphic.Component<"div", BoxOptions & { inline?: boolean }>;

type ContainerOptions = Classes.WithProps<ContainerKlass.Variants & Sprinkles.MarginShorthandsVariants & Sprinkles.PaddingShorthandsVariants>;

const Container = ((props) => {
	const [polymorphic, classes, root, margin, padding, rest] = splitProps(
		props,
		Polymorphic.Keys,
		Classes.Keys,
		ContainerKlass.Root.vk,
		Sprinkles.MarginKeys,
		Sprinkles.PaddingKeys
	);
	return <Dynamic component={polymorphic.as ?? "div"} {...rest} class={Classes.x([ContainerKlass.Root(root), Sprinkles.Margin(margin), Sprinkles.Padding(padding)], classes)} />;
}) as Polymorphic.Component<"div", ContainerOptions>;

export type { BoxOptions, ContainerOptions };
export { Box, Block, Flex, Center, Grid, Container };
