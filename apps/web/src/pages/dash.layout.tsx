import { Outlet } from "@flamrdevs/x-solid/modules/router";

const DashLayout = () => {
	return (
		<div>
			<h1>DashLayout</h1>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default DashLayout;
