import { Padding } from "@flamrdevs/ui/core/Sprinkles.css";

import clsx from "@flamrdevs/x/modules/clsx";

import { Box, Container, Separator, Text } from "~/components/core";

const NotFoundPage = () => {
	return (
		<Container max="md" class={clsx(Padding({ p: "md" }))}>
			<Text family="mono" size="xl" weight={700} align="center">
				404
			</Text>
			<Box py="md">
				<Separator orientation="horizontal" />
			</Box>
			<Text family="mono" size="xl" weight={700} align="center">
				not found
			</Text>
		</Container>
	);
};

export default NotFoundPage;
