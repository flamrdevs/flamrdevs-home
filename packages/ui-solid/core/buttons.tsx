import { splitProps } from "solid-js";

import { Button as KobalteButton } from "@kobalte/core";

import * as ButtonRecipe from "@flamrdevs/ui/core/Button.recipe.css.ts";
import * as IconButtonRecipe from "@flamrdevs/ui/core/IconButton.recipe.css.ts";

import * as Classes from "../classes.ts";
import * as Polymorphic from "../polymorphic.ts";

type ButtonOptions = Classes.WithProps<Polymorphic.PropsWithoutAsChild<KobalteButton.ButtonRootOptions & ButtonRecipe.Variants>>;

const Button = ((props) => {
	const [classes, recipe, rest] = splitProps(props, Classes.Keys, ButtonRecipe.RootKeys);
	return <KobalteButton.Root {...rest} class={Classes.x(ButtonRecipe.Root(recipe), classes)} />;
}) as Polymorphic.Component<typeof KobalteButton.Root, ButtonOptions>;

type IconButtonOptions = Classes.WithProps<Polymorphic.PropsWithoutAsChild<KobalteButton.ButtonRootOptions & IconButtonRecipe.Variants>>;

const IconButton = ((props) => {
	const [classes, recipe, rest] = splitProps(props, Classes.Keys, IconButtonRecipe.RootKeys);
	return <KobalteButton.Root {...rest} class={Classes.x(IconButtonRecipe.Root(recipe), classes)} />;
}) as Polymorphic.Component<typeof KobalteButton.Root, IconButtonOptions>;

export type { ButtonOptions, IconButtonOptions };
export { Button, IconButton };
