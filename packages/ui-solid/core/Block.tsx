import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as Recipes from "@flamrdevs/ui/core/.recipes.css";
import * as Sprinkles from "@flamrdevs/ui/core/.sprinkles.css";

import Box from "./Box";

type BlockProps = JSX.IntrinsicElements["div"] & {
	inline?: boolean;
} & Recipes.TypographyVariants &
	Sprinkles.LayoutShorthandsVariants &
	Sprinkles.PositionShorthandsVariants &
	Sprinkles.MarginShorthandsVariants &
	Sprinkles.PaddingShorthandsVariants;

const LocalKeys = ["inline", "disp"] as const;

const Block = (props: BlockProps) => {
	const [local, rest] = splitProps(props, LocalKeys);

	return <Box disp={local.disp ?? (local.inline ? "iblock" : "block")} {...rest} />;
};

export type { BlockProps };
export default Block;
