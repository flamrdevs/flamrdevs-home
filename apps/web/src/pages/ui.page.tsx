import { Show } from "solid-js";

import { useStore } from "@flamrdevs/x-solid/libs/store.ts";

import { Box, Container, Flex, IconButton, Separator } from "~/components/core.ts";
import { Lucide } from "~/components/icons/index.ts";

import { ThemeStore, toggleTheme } from "~/stores/theme.ts";

import Sections from "./_ui/Sections.tsx";

const ToggleThemeIconButton = () => {
	const theme = useStore(ThemeStore);

	return (
		<IconButton onClick={toggleTheme} aria-label="Toggle theme">
			<Show when={theme() === "dark"} fallback={<Lucide.Icon i="Moon" />}>
				<Lucide.Icon i="Sun" />
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
				<Sections />
			</Container>
		</>
	);
};

export default UICorePage;
