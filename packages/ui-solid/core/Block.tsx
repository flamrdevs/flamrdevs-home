import { splitProps } from "solid-js";
import type { ValidComponent } from "solid-js";

import Box from "./Box";
import type { BoxProps } from "./Box";

type BlockProps<C extends ValidComponent> = BoxProps<C> & {
	inline?: boolean;
};

const LocalKeys = ["inline", "disp"] as const;

const Block = <C extends ValidComponent = "div">(props: BlockProps<C>) => {
	const [local, rest] = splitProps(props as BlockProps<"div">, LocalKeys);

	return <Box disp={local.disp ?? (local.inline ? "iblock" : "block")} {...rest} />;
};

export type { BlockProps };
export default Block;
