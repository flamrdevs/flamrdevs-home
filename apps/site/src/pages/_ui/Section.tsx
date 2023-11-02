import type { JSX, ParentProps } from "solid-js";

import { Box, Center, Flex, Separator, Text } from "~/components/core.ts";

import * as CSS from "./Section.css.ts";

export const Root = (props: ParentProps<{ title: string }>) => {
	return (
		<Box>
			<Text family="mono" size="4" weight="6">
				{props.title}
			</Text>

			<Box p="2">{props.children}</Box>
		</Box>
	);
};

export const Block = (props: { left: JSX.Element; right: JSX.Element }) => {
	return (
		<Flex ai="-:-" jc="between" gap="2" px="8" py="6" class={CSS.SectionBlockRoot}>
			<Center p="2" class={CSS.SectionBlockLeft}>
				{props.left}
			</Center>
			<Separator orientation="vertical" />
			<Box p="2" class={CSS.SectionBlockRight}>
				{props.right}
			</Box>
		</Flex>
	);
};

export const colors = CSS.colors;
