import Text from "@flamrdevs/ui-solid/core/Text";

import { Outlet } from "@flamrdevs/x-solid/modules/router";

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
