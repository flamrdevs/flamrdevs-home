import type { ComponentProps, JSX, ParentProps, ValidComponent } from "solid-js";
import type { AsChildProp } from "@kobalte/core";

type AsProp<C extends ValidComponent> = { as?: C };

type RefValue<T extends any> = T extends { ref?: any } ? T["ref"] : unknown;

type Props<C extends ValidComponent, Props = {}> = ParentProps<Props & AsProp<C>> &
	Omit<
		Omit<ComponentProps<C>, "ref"> & { ref?: C extends keyof JSX.IntrinsicElements ? RefValue<JSX.IntrinsicElements[C]> : RefValue<ComponentProps<C>> },
		keyof (AsProp<C> & Props)
	>;

type Component<DC extends ValidComponent, P> = <C extends ValidComponent = DC>(props: Props<C, P>) => JSX.Element;

type PropsWithoutAsChild<P extends AsChildProp> = Omit<P, keyof AsChildProp>;

const Keys = ["as"] as const satisfies readonly (keyof AsProp<ValidComponent>)[];

export type { Component, PropsWithoutAsChild };
export { Keys };
