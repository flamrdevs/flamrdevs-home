import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as Recipes from "@flamrdevs/ui/core/.recipes.css";
import * as Sprinkles from "@flamrdevs/ui/core/.sprinkles.css";

import Box from "./Box";

type FlexProps = JSX.IntrinsicElements["div"] & {
	inline?: boolean;
} & Recipes.TypographyVariants &
	Sprinkles.LayoutShorthandsVariants &
	Sprinkles.PositionShorthandsVariants &
	Sprinkles.MarginShorthandsVariants &
	Sprinkles.PaddingShorthandsVariants;

const LocalKeys = ["inline", "disp"] as const;

const Flex = (props: FlexProps) => {
	const [local, rest] = splitProps(props, LocalKeys);

	return <Box disp={local.disp ?? (local.inline ? "iflex" : "flex")} {...rest} />;
};

export type { FlexProps };
export default Flex;
