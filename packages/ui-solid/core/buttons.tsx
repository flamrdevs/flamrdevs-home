import { splitProps } from "solid-js";

import { Button as KobalteButton } from "@kobalte/core";

import * as ButtonRecipe from "@flamrdevs/ui/core/Button.recipe.css.ts";
import * as IconButtonRecipe from "@flamrdevs/ui/core/IconButton.recipe.css.ts";
import * as Recipes from "@flamrdevs/ui/core/.recipes.css.ts";

import * as Classes from "../classes.ts";
import * as Polymorphic from "../polymorphic.ts";

type ButtonOptions = Classes.WithProps<Polymorphic.PropsWithoutAsChild<KobalteButton.ButtonRootOptions & ButtonRecipe.Variants & Recipes.Color6Variants>>;

const Button = ((props) => {
	const [classes, recipe, color, rest] = splitProps(props, Classes.Keys, ButtonRecipe.RootKeys, Recipes.Color6Keys);
	return <KobalteButton.Root {...rest} class={Classes.x([ButtonRecipe.Root(recipe), Recipes.Color6(color)], classes)} />;
}) as Polymorphic.Component<typeof KobalteButton.Root, ButtonOptions>;

type IconButtonOptions = Classes.WithProps<Polymorphic.PropsWithoutAsChild<KobalteButton.ButtonRootOptions & IconButtonRecipe.Variants & Recipes.Color6Variants>>;

const IconButton = ((props) => {
	const [classes, recipe, color, rest] = splitProps(props, Classes.Keys, IconButtonRecipe.RootKeys, Recipes.Color6Keys);
	return <KobalteButton.Root {...rest} class={Classes.x([IconButtonRecipe.Root(recipe), Recipes.Color6(color)], classes)} />;
}) as Polymorphic.Component<typeof KobalteButton.Root, IconButtonOptions>;

export type { ButtonOptions, IconButtonOptions };
export { Button, IconButton };
