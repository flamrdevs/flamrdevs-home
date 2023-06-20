import { Outlet } from "@flamrdevs/x-solid/modules/router";

import { Box, Center, Text } from "~/components/core";
import { ButtonLink } from "~/components/router";

const DashLayout = () => {
	return (
		<Box>
			<Box p="2">
				<Text family="mono" size="lg" weight={500} align="center">
					DashLayout
				</Text>
			</Box>

			<Center gap="2">
				<ButtonLink href="/dash">Index</ButtonLink>
				<ButtonLink href="/dash/settings">Settings</ButtonLink>
			</Center>

			<Box p="2">
				<Outlet />
			</Box>
		</Box>
	);
};

export default DashLayout;
