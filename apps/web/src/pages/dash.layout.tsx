import type { ParentComponent } from "solid-js";

import { Box, Flex, Separator, Text } from "~/components/core.ts";
import { ButtonLink } from "~/components/router.ts";

import * as DASHCSS from "~/styles/pages/dash.css";

const DashLayout: ParentComponent = (props) => {
	return (
		<>
			<Flex posi="abs" gap="4" class={DASHCSS.container}>
				<Flex<"nav"> as="nav" p="4" gap="4" class={DASHCSS.nav}>
					<Text family="mono" size="4" weight="5">
						Dashboard
					</Text>

					<Separator />

					<Flex gap="4" style={{ "flex-grow": 1, "flex-direction": "column" }}>
						<ButtonLink href="/dash" style={{ "justify-content": "flex-start" }}>
							Index
						</ButtonLink>
						<ButtonLink href="/dash/settings" style={{ "justify-content": "flex-start" }}>
							Settings
						</ButtonLink>
					</Flex>
				</Flex>

				<Box<"main"> as="main" p="4" class={DASHCSS.main}>
					{props.children}
				</Box>
			</Flex>
		</>
	);
};

export default DashLayout;
