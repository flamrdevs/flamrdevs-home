import type { ValidComponent } from "solid-js";
import type { AsChildProp } from "@kobalte/core";

type AsProps = { as?: ValidComponent };

type Props<P extends {}> = AsProps & P;

type PropsWithoutAsChild<P extends AsChildProp> = Omit<P, keyof AsChildProp>;

const Keys = ["as"] as const satisfies readonly (keyof AsProps)[];

export type { Props, PropsWithoutAsChild };
export { Keys };
