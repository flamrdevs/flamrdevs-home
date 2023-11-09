import { splitProps } from "solid-js";

import { Button as KobalteButton } from "@kobalte/core";

import * as ButtonKlass from "@flamrdevs/ui/core/Button/klass.ts";
import * as IconButtonKlass from "@flamrdevs/ui/core/IconButton/klass.ts";
import * as klass from "@flamrdevs/ui/core/_/klass.ts";

import * as Classes from "../classes.ts";
import * as Polymorphic from "../polymorphic.ts";

type ButtonOptions = Classes.WithProps<Polymorphic.PropsWithoutAsChild<KobalteButton.ButtonRootOptions & ButtonKlass.Variants & klass.Color6Variants>>;

const Button = ((props) => {
	const [classes, root, color, rest] = splitProps(props, Classes.Keys, ButtonKlass.Root.vk, klass.Color6.vk);
	return <KobalteButton.Root {...rest} class={Classes.x([ButtonKlass.Root(root), klass.Color6(color)], classes)} />;
}) as Polymorphic.Component<typeof KobalteButton.Root, ButtonOptions>;

type IconButtonOptions = Classes.WithProps<Polymorphic.PropsWithoutAsChild<KobalteButton.ButtonRootOptions & IconButtonKlass.Variants & klass.Color6Variants>>;

const IconButton = ((props) => {
	const [classes, root, color, rest] = splitProps(props, Classes.Keys, IconButtonKlass.Root.vk, klass.Color6.vk);
	return <KobalteButton.Root {...rest} class={Classes.x([IconButtonKlass.Root(root), klass.Color6(color)], classes)} />;
}) as Polymorphic.Component<typeof KobalteButton.Root, IconButtonOptions>;

export type { ButtonOptions, IconButtonOptions };
export { Button, IconButton };
