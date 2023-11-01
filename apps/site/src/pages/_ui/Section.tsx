import { For, Show, createSignal } from "solid-js";
import type { JSX, ParentProps } from "solid-js";

import { Badge, Box, Button, Center, Checkbox, Flex, Icon, IconButton, Image, Kbd, Link, Loader, Progress, Separator, Switch, Text } from "~/components/core.ts";

import * as CSS from "./Section.css.ts";

const Section = (props: ParentProps<{ title: string }>) => {
	return (
		<Box>
			<Text family="mono" size="4" weight="6">
				{props.title}
			</Text>

			<Box p="2">{props.children}</Box>
		</Box>
	);
};

const SectionBlock = (props: { left: JSX.Element; right: JSX.Element }) => {
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

type Color2 = (typeof COLOR_2)[number];
type Color6 = (typeof COLOR_6)[number];
const COLOR_2 = ["neutral", "primary"] as const;
const COLOR_6 = [...COLOR_2, "success", "info", "warning", "danger"] as const;

const DEFAULT_COLOR = "neutral" satisfies Color2;

const createColor2 = () => createSignal<Color2>(DEFAULT_COLOR);
const createColor6 = () => createSignal<Color6>(DEFAULT_COLOR);
const createDisabled = () => createSignal<boolean>(false);

const Color2Select = (props: { color: Color2; setColor: (value: Color2) => void }) => (
	<Flex gap="1">
		<For each={COLOR_2}>
			{(color) => (
				<IconButton color={color} size="sm" onClick={() => props.setColor(color)}>
					<Show when={props.color === color}>
						<Icon i="Check" style={{ width: "80%", height: "80%" }} />
					</Show>
				</IconButton>
			)}
		</For>
	</Flex>
);
const Color6Select = (props: { color: Color6; setColor: (value: Color6) => void }) => (
	<Flex gap="1">
		<For each={COLOR_6}>
			{(color) => (
				<IconButton color={color} size="sm" onClick={() => props.setColor(color)}>
					<Show when={props.color === color}>
						<Icon i="Check" style={{ width: "80%", height: "80%" }} />
					</Show>
				</IconButton>
			)}
		</For>
	</Flex>
);
const DisabledSwitch = (props: { disabled: boolean; setDisabled: (value: boolean) => void }) => <Switch label="Disabled" checked={props.disabled} onChange={props.setDisabled} />;

const Divider = () => <Separator orientation="horizontal" />;

const SectionColor = () => {
	return (
		<Section title="Color">
			<For each={CSS.colors}>
				{(shades) => (
					<Flex py="1" gap="2">
						<For each={shades}>{(className) => <Box class={className} style={{ width: "3rem", height: "3rem" }} />}</For>
					</Flex>
				)}
			</For>
		</Section>
	);
};

const SectionBadge = () => {
	const [color, setColor] = createColor6();

	return (
		<Section title="Badge">
			<SectionBlock
				left={
					<Box>
						<Badge color={color()}>badge</Badge>
					</Box>
				}
				right={
					<Flex gap="2" style={{ "flex-direction": "column" }}>
						<Color6Select color={color()} setColor={setColor} />
					</Flex>
				}
			/>
		</Section>
	);
};

const SectionButton = () => {
	const [color, setColor] = createColor6();
	const [disabled, setDisabled] = createDisabled();

	return (
		<Section title="Button">
			<SectionBlock
				left={
					<Box>
						<Button color={color()} disabled={disabled()}>
							button
						</Button>
					</Box>
				}
				right={
					<Flex gap="2" style={{ "flex-direction": "column" }}>
						<Color6Select color={color()} setColor={setColor} />
						<DisabledSwitch disabled={disabled()} setDisabled={setDisabled} />
					</Flex>
				}
			/>
		</Section>
	);
};

const SectionCheckbox = () => {
	const [color, setColor] = createColor2();
	const [disabled, setDisabled] = createDisabled();

	return (
		<Section title="Checkbox">
			<SectionBlock
				left={
					<Box>
						<Checkbox label="Label" color={color()} disabled={disabled()} />
					</Box>
				}
				right={
					<Flex gap="2" style={{ "flex-direction": "column" }}>
						<Color2Select color={color()} setColor={setColor} />
						<DisabledSwitch disabled={disabled()} setDisabled={setDisabled} />
					</Flex>
				}
			/>
		</Section>
	);
};

const SectionIconButton = () => {
	const [color, setColor] = createColor6();
	const [disabled, setDisabled] = createDisabled();

	return (
		<Section title="IconButton">
			<SectionBlock
				left={
					<Box>
						<IconButton color={color()} disabled={disabled()}>
							<Icon i="Github" />
						</IconButton>
					</Box>
				}
				right={
					<Flex gap="2" style={{ "flex-direction": "column" }}>
						<Color6Select color={color()} setColor={setColor} />
						<DisabledSwitch disabled={disabled()} setDisabled={setDisabled} />
					</Flex>
				}
			/>
		</Section>
	);
};

const SectionImage = () => {
	return (
		<Section title="Image">
			<SectionBlock
				left={
					<Box>
						<Image alt="cover-ghost" src="https://flamrdevs.pages.dev/og/cover-ghost-1200x628-dark.png" style={{ width: "300px", height: "157px" }} />
					</Box>
				}
				right={null}
			/>
		</Section>
	);
};

const SectionKbd = () => {
	const [color, setColor] = createColor2();

	return (
		<Section title="Kbd">
			<SectionBlock
				left={
					<Box>
						<Kbd color={color()}>kbd</Kbd>
					</Box>
				}
				right={
					<Flex gap="2" style={{ "flex-direction": "column" }}>
						<Color2Select color={color()} setColor={setColor} />
					</Flex>
				}
			/>
		</Section>
	);
};

const SectionLink = () => {
	const [disabled, setDisabled] = createDisabled();

	return (
		<Section title="Link">
			<SectionBlock
				left={
					<Box>
						<Link href="#" disabled={disabled()}>
							link
						</Link>
					</Box>
				}
				right={
					<Flex gap="2" style={{ "flex-direction": "column" }}>
						<DisabledSwitch disabled={disabled()} setDisabled={setDisabled} />
					</Flex>
				}
			/>
		</Section>
	);
};

const SectionLoader = () => {
	const [color, setColor] = createColor6();

	return (
		<Section title="Loader">
			<SectionBlock
				left={
					<Box>
						<Loader color={color()} />
					</Box>
				}
				right={
					<Flex gap="2" style={{ "flex-direction": "column" }}>
						<Color6Select color={color()} setColor={setColor} />
					</Flex>
				}
			/>
		</Section>
	);
};

const SectionProgress = () => {
	const [color, setColor] = createColor6();

	return (
		<Section title="Progress">
			<SectionBlock
				left={
					<Box>
						<Progress label="Label" color={color()} value={50} />
					</Box>
				}
				right={
					<Flex gap="2" style={{ "flex-direction": "column" }}>
						<Color6Select color={color()} setColor={setColor} />
					</Flex>
				}
			/>
		</Section>
	);
};

const SectionSwitch = () => {
	const [color, setColor] = createColor2();
	const [disabled, setDisabled] = createDisabled();

	return (
		<Section title="Switch">
			<SectionBlock
				left={
					<Box>
						<Switch label="Label" color={color()} disabled={disabled()} />
					</Box>
				}
				right={
					<Flex gap="2" style={{ "flex-direction": "column" }}>
						<Color2Select color={color()} setColor={setColor} />
						<DisabledSwitch disabled={disabled()} setDisabled={setDisabled} />
					</Flex>
				}
			/>
		</Section>
	);
};

const SectionText = () => {
	return (
		<Section title="Text">
			<SectionBlock
				left={
					<Box>
						<Text>text</Text>
					</Box>
				}
				right={null}
			/>
		</Section>
	);
};

export default () => {
	return (
		<>
			<SectionColor />
			<Divider />
			<SectionBadge />
			<Divider />
			<SectionButton />
			<Divider />
			<SectionCheckbox />
			<Divider />
			<SectionIconButton />
			<Divider />
			<SectionImage />
			<Divider />
			<SectionKbd />
			<Divider />
			<SectionLink />
			<Divider />
			<SectionLoader />
			<Divider />
			<SectionProgress />
			<Divider />
			<SectionSwitch />
			<Divider />
			<SectionText />
		</>
	);
};
