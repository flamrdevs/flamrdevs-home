import type { JSX } from "solid-js";

type Props = {
	children?: JSX.Element;
};

type WithoutProps<P> = Omit<P, keyof Props>;

const Keys = ["children"] as const satisfies Readonly<(keyof Props)[]>;

export type { WithoutProps };
export { Keys };
