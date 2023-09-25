import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import * as Recipes from "@flamrdevs/ui/core/.recipes.css";
import * as Sprinkles from "@flamrdevs/ui/core/.sprinkles.css";

import Box from "./Box";

type CenterProps = JSX.IntrinsicElements["div"] & {
	inline?: boolean;
} & Recipes.TypographyVariants &
	Sprinkles.LayoutShorthandsVariants &
	Sprinkles.PositionShorthandsVariants &
	Sprinkles.MarginShorthandsVariants &
	Sprinkles.PaddingShorthandsVariants;

const LocalKeys = ["inline", "disp", "ai", "jc"] as const;

const Center = (props: CenterProps) => {
	const [local, rest] = splitProps(props, LocalKeys);

	return <Box disp={local.disp ?? (local.inline ? "iflex" : "flex")} ai={local.ai ?? "-:-"} jc={local.jc ?? "-:-"} {...rest} />;
};

export type { CenterProps };
export default Center;
