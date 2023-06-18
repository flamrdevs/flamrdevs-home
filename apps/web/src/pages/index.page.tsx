import { Show } from "solid-js";

import { Padding } from "@flamrdevs/ui/core/Sprinkles.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { useStore } from "@flamrdevs/x-solid/libs/store";

import { Box, Button, Center, Container, IconButton, Separator, Text } from "~/components/core";
import { WeatherMoon, WeatherSunny } from "~/components/icons/fluent";

import { ThemeStore, toggleTheme } from "~/stores/theme";

const IndexPage = () => {
	const theme = useStore(ThemeStore);

	return (
		<Container max="md" class={clsx(Padding({ p: "md" }))}>
			<Text family="mono" size="xl" weight={700} align="center">
				flamrdevs
			</Text>
			<Box py="md">
				<Separator orientation="horizontal" />
			</Box>
			<Center gap="sm">
				<Button font="mono" onClick={toggleTheme}>
					theme
				</Button>
				<IconButton onClick={toggleTheme}>
					<Show when={theme() === "dark"} fallback={<WeatherSunny />}>
						<WeatherMoon />
					</Show>
				</IconButton>
			</Center>
		</Container>
	);
};

export default IndexPage;
