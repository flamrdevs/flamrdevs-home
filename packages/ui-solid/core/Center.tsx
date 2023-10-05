import { splitProps } from "solid-js";
import type { ValidComponent } from "solid-js";

import Box from "./Box";
import type { BoxProps } from "./Box";

type CenterProps<C extends ValidComponent> = BoxProps<C> & {
	inline?: boolean;
};

const LocalKeys = ["inline", "disp", "ai", "jc"] as const;

const Center = <C extends ValidComponent = "div">(props: CenterProps<C>) => {
	const [local, rest] = splitProps(props as CenterProps<"div">, LocalKeys);

	return <Box disp={local.disp ?? (local.inline ? "iflex" : "flex")} ai={local.ai ?? "-:-"} jc={local.jc ?? "-:-"} {...rest} />;
};

export type { CenterProps };
export default Center;
