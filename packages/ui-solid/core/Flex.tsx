import { splitProps } from "solid-js";
import type { ValidComponent } from "solid-js";

import Box from "./Box";
import type { BoxProps } from "./Box";

type FlexProps<C extends ValidComponent> = BoxProps<C> & {
	inline?: boolean;
};

const LocalKeys = ["inline", "disp"] as const;

const Flex = <C extends ValidComponent = "div">(props: FlexProps<C>) => {
	const [local, rest] = splitProps(props as FlexProps<"div">, LocalKeys);

	return <Box disp={local.disp ?? (local.inline ? "iflex" : "flex")} {...rest} />;
};

export type { FlexProps };
export default Flex;
