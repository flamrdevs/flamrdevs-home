import { Outlet } from "@flamrdevs/x-solid/modules/router";

import { Text } from "~/components/core";

const DashLayout = () => {
	return (
		<div>
			<Text family="mono" size="lg" weight={500} align="center">
				DashLayout
			</Text>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default DashLayout;
