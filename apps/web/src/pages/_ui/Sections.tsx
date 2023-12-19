import { For, Show, createSignal, onMount } from "solid-js";

import * as HOST from "@flamrdevs/utils/host.ts";

import { Badge, Box, Button, Checkbox, Flex, IconButton, Image, Kbd, Link, Progress, Separator, Spinner, Switch, Text } from "~/components/core.ts";
import { Lucide } from "~/components/icons/index.ts";

import * as Section from "./Section.tsx";

type Color2 = (typeof COLOR_2)[number];
type Color6 = (typeof COLOR_6)[number];
const COLOR_2 = ["neutral", "primary"] as const;
const COLOR_6 = [...COLOR_2, "success", "info", "warning", "danger"] as const;

const DEFAULT_COLOR = "neutral" satisfies Color2;

const createStorageSignal = <T extends any>(key: string, initialValue: T) => {
	const [state, setState] = createSignal<T>(initialValue);
	const newSetState = (value: T) => {
		try {
			sessionStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
		} finally {
			setState(() => value);
		}
	};
	onMount(() => {
		try {
			const item = sessionStorage.getItem(key);
			if (typeof item === "string") return newSetState(JSON.parse(item) as T);
		} catch (error) {
		} finally {
			newSetState(state());
		}
	});
	return [state, newSetState] as const;
};

const createColor2 = (key: string) => createStorageSignal<Color2>(`:ui:color2:${key}`, DEFAULT_COLOR);
const createColor6 = (key: string) => createStorageSignal<Color6>(`:ui:color6:${key}`, DEFAULT_COLOR);
const createDisabled = (key: string) => createStorageSignal<boolean>(`:ui:disabled:${key}`, false);

const Color2Select = (props: { color: Color2; setColor: (value: Color2) => void }) => (
	<Flex gap="1">
		<For each={COLOR_2}>
			{(color) => (
				<IconButton color={color} size="sm" onClick={() => props.setColor(color)} aria-label={`Color ${color}`}>
					<Show when={props.color === color}>
						<Lucide.Icon i="Check" style={{ width: "80%", height: "80%" }} />
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
				<IconButton color={color} size="sm" onClick={() => props.setColor(color)} aria-label={`Color ${color}`}>
					<Show when={props.color === color}>
						<Lucide.Icon i="Check" style={{ width: "80%", height: "80%" }} />
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
		<Section.Root title="Color">
			<For each={Section.colors}>
				{(shades) => (
					<Flex py="1" gap="2">
						<For each={shades}>{(className) => <Box class={className} style={{ width: "3rem", height: "3rem" }} />}</For>
					</Flex>
				)}
			</For>
		</Section.Root>
	);
};

const SectionBadge = () => {
	const [color, setColor] = createColor6("badge");

	return (
		<Section.Root title="Badge">
			<Section.Block
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
		</Section.Root>
	);
};

const SectionButton = () => {
	const [color, setColor] = createColor6("button");
	const [disabled, setDisabled] = createDisabled("button");

	return (
		<Section.Root title="Button">
			<Section.Block
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
		</Section.Root>
	);
};

const SectionCheckbox = () => {
	const [color, setColor] = createColor2("checkbox");
	const [disabled, setDisabled] = createDisabled("checkbox");

	return (
		<Section.Root title="Checkbox">
			<Section.Block
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
		</Section.Root>
	);
};

const SectionIconButton = () => {
	const [color, setColor] = createColor6("icon-button");
	const [disabled, setDisabled] = createDisabled("icon-button");

	return (
		<Section.Root title="IconButton">
			<Section.Block
				left={
					<Box>
						<IconButton color={color()} disabled={disabled()} aria-label="GitHub">
							<Lucide.Icon i="Github" />
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
		</Section.Root>
	);
};

const SectionImage = () => {
	return (
		<Section.Root title="Image">
			<Section.Block
				left={
					<Box>
						<Image alt="cover-ghost" src={HOST.STATIC("og", "cover-ghost-1200x628-dark.png")} style={{ width: "300px", height: "157px" }} />
					</Box>
				}
				right={null}
			/>
		</Section.Root>
	);
};

const SectionKbd = () => {
	const [color, setColor] = createColor2("kbd");

	return (
		<Section.Root title="Kbd">
			<Section.Block
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
		</Section.Root>
	);
};

const SectionLink = () => {
	const [disabled, setDisabled] = createDisabled("link");

	return (
		<Section.Root title="Link">
			<Section.Block
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
		</Section.Root>
	);
};

const SectionProgress = () => {
	const [color, setColor] = createColor6("progress");

	return (
		<Section.Root title="Progress">
			<Section.Block
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
		</Section.Root>
	);
};

const SectionSpinner = () => {
	const [color, setColor] = createColor6("spinner");

	return (
		<Section.Root title="Spinner">
			<Section.Block
				left={
					<Box>
						<Spinner color={color()} />
					</Box>
				}
				right={
					<Flex gap="2" style={{ "flex-direction": "column" }}>
						<Color6Select color={color()} setColor={setColor} />
					</Flex>
				}
			/>
		</Section.Root>
	);
};

const SectionSwitch = () => {
	const [color, setColor] = createColor2("switch");
	const [disabled, setDisabled] = createDisabled("switch");

	return (
		<Section.Root title="Switch">
			<Section.Block
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
		</Section.Root>
	);
};

const SectionText = () => {
	return (
		<Section.Root title="Text">
			<Section.Block
				left={
					<Box>
						<Text>text</Text>
					</Box>
				}
				right={null}
			/>
		</Section.Root>
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
			<SectionProgress />
			<Divider />
			<SectionSpinner />
			<Divider />
			<SectionSwitch />
			<Divider />
			<SectionText />
		</>
	);
};
