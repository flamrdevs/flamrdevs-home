import { Show } from "solid-js";

import { MoonIcon, SunIcon } from "lucide-solid";

import { useStore } from "@flamrdevs/x-solid/libs/store";

import { Center, Container, Flex, IconButton, Separator, Text } from "~/components/core";
import { ButtonLink } from "~/components/router";

import { ThemeStore, changeTheme, toggleTheme } from "~/stores/theme";

const NotFoundPage = () => {
	const theme = useStore(ThemeStore);

	return (
		<Container max="md" p="4">
			<Flex ai="center" jc="center" style={{ height: "1.75rem" }}>
				<Text family="mono" size="xl" weight={700} align="center">
					404
				</Text>
				<Separator orientation="vertical" />
				<Text family="mono" size="xl" weight={700} align="center">
					not found
				</Text>
			</Flex>

			<Separator orientation="horizontal" />

			<Center gap="2">
				<ButtonLink href="/">home</ButtonLink>

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

export default NotFoundPage;
