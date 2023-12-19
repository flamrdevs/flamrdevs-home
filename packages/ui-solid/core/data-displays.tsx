import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

import { Image as KobalteImage, Progress as KobalteProgress } from "@kobalte/core";

import * as BadgeKlass from "@flamrdevs/ui/core/Badge/klass.ts";
import * as ImageStyle from "@flamrdevs/ui/core/Image/style.css.ts";
import * as KbdStyle from "@flamrdevs/ui/core/Kbd/style.css.ts";
import * as ProgressStyle from "@flamrdevs/ui/core/Progress/style.css.ts";
import * as SpinnerKlass from "@flamrdevs/ui/core/Spinner/klass.ts";
import * as klass from "@flamrdevs/ui/core/_/klass.ts";

import * as Children from "../children.ts";
import * as Classes from "../classes.ts";
import * as Polymorphic from "../polymorphic.ts";

type BadgeProps = Classes.WithProps<JSX.IntrinsicElements["span"] & BadgeKlass.Variants & klass.Color6Variants>;

const Badge = (props: BadgeProps) => {
	const [classes, root, color, rest] = splitProps(props, Classes.Keys, BadgeKlass.Root.vk, klass.Color6.vk);
	return <span {...rest} class={Classes.x([BadgeKlass.Root(root), klass.Color6(color)], classes)} />;
};

type ImageProps = Polymorphic.PropsWithoutAsChild<KobalteImage.ImageRootProps & Pick<KobalteImage.ImageImgProps, "alt" | "src">>;

const ImageImgKeys = ["alt", "src"] as const;

const Image = (props: ImageProps) => {
	const [children, classes, img, rest] = splitProps(props, Children.Keys, Classes.Keys, ImageImgKeys);
	return (
		<KobalteImage.Root {...rest} class={Classes.x([ImageStyle.Root], classes)}>
			<KobalteImage.Img {...img} class={ImageStyle.Img} />
			<KobalteImage.Fallback {...children} class={ImageStyle.Fallback} />
		</KobalteImage.Root>
	);
};

type KbdProps = JSX.IntrinsicElements["kbd"] & klass.Color2Variants;

const Kbd = (props: KbdProps) => {
	const [classes, color, rest] = splitProps(props, Classes.Keys, klass.Color2.vk);
	return <kbd {...rest} class={Classes.x([KbdStyle.Root, klass.Color2(color)], classes)} />;
};

type ProgressProps = Children.WithoutProps<
	Polymorphic.PropsWithoutAsChild<
		KobalteProgress.ProgressRootProps & {
			label: string;
		} & klass.Color6Variants
	>
>;

const ProgressLocalKeys = ["label"] as const;

const Progress = (props: ProgressProps) => {
	const [classes, local, color, rest] = splitProps(props, Classes.Keys, ProgressLocalKeys, klass.Color6.vk);

	return (
		<KobalteProgress.Root {...rest} class={Classes.x([ProgressStyle.Root, klass.Color6(color)], classes)}>
			<div class={ProgressStyle.Container}>
				<KobalteProgress.Label class={ProgressStyle.Label}>{local.label}</KobalteProgress.Label>
				<KobalteProgress.ValueLabel class={ProgressStyle.Label} />
			</div>
			<KobalteProgress.Track class={ProgressStyle.Track}>
				<KobalteProgress.Fill class={ProgressStyle.Fill} />
			</KobalteProgress.Track>
		</KobalteProgress.Root>
	);
};

type SpinnerProps = Classes.WithProps<JSX.IntrinsicElements["svg"] & SpinnerKlass.Variants & klass.Color6Variants>;

const Spinner = (props: SpinnerProps) => {
	const [classes, root, color, rest] = splitProps(props, Classes.Keys, SpinnerKlass.Root.vk, klass.Color6.vk);

	return (
		<svg {...rest} class={Classes.x([SpinnerKlass.Root(root), klass.Color6(color)], classes)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<g class={SpinnerKlass.GStyle}>
				<circle class={SpinnerKlass.CircleStyle} cx="12" cy="12" r="9.5" fill="none" stroke-width="2" />
			</g>
		</svg>
	);
};

export type { BadgeProps, ImageProps, KbdProps, ProgressProps, SpinnerProps };
export { Badge, Image, Kbd, Progress, Spinner };
