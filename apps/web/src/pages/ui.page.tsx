import { Show } from "solid-js";

import { useStore } from "@flamrdevs/x-solid/libs/store.ts";

import { Box, Container, Flex, Icon, IconButton, Separator } from "~/components/core.ts";

import { ThemeStore, toggleTheme } from "~/stores/theme.ts";

import Section from "./_ui/Section.tsx";

const ToggleThemeIconButton = () => {
	const theme = useStore(ThemeStore);

	return (
		<IconButton onClick={toggleTheme}>
			<Show when={theme() === "dark"} fallback={<Icon i="Moon" />}>
				<Icon i="Sun" />
			</Show>
		</IconButton>
	);
};

const UICorePage = () => {
	return (
		<>
			<Container max="lg" p="4">
				<Flex ai="-:-">
					<Box style={{ "flex-grow": "1" }} />
					<Separator orientation="vertical" style="height: 1.5rem" />
					<ToggleThemeIconButton />
				</Flex>
			</Container>

			<Container max="lg" p="4">
				<Section />
			</Container>
		</>
	);
};

export default UICorePage;
