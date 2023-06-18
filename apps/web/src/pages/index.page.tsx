import { Padding } from "@flamrdevs/ui/core/Sprinkles.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { Box, Button, Center, Container, IconButton, Separator, Text } from "~/components/core";
import { WeatherSunny } from "~/components/icons/fluent";

import { toggleTheme } from "~/stores/theme";

const IndexPage = () => {
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
					<WeatherSunny />
				</IconButton>
			</Center>
		</Container>
	);
};

export default IndexPage;
