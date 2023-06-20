import { Show } from "solid-js";

import { MoonIcon, SunIcon } from "lucide-solid";

import { useStore } from "@flamrdevs/x-solid/libs/store";

import { Center, Container, IconButton, Separator, Text } from "~/components/core";
import { ButtonLink } from "~/components/router";

import { ThemeStore, changeTheme, toggleTheme } from "~/stores/theme";

const IndexPage = () => {
	const theme = useStore(ThemeStore);

	return (
		<Container max="md" p="4">
			<Text family="mono" size="xl" weight={700} align="center">
				home
			</Text>

			<Separator orientation="horizontal" />

			<Center gap="2">
				<ButtonLink href="/not-found">not found</ButtonLink>

				<IconButton onClick={toggleTheme}>
					<Show when={theme() === "dark"} fallback={<MoonIcon />}>
						<SunIcon />
					</Show>
				</IconButton>

				<IconButton
					onClick={() => {
						changeTheme("light");
					}}
				>
					<SunIcon />
				</IconButton>

				<IconButton
					onClick={() => {
						changeTheme("dark");
					}}
				>
					<MoonIcon />
				</IconButton>
			</Center>
		</Container>
	);
};

export default IndexPage;
