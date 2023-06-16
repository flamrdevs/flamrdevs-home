import { lazy } from "solid-js";

import { Route, Routes } from "@flamrdevs/x-solid/modules/router";

const IndexPage = lazy(() => import("~/pages/index.page"));
const DashLayout = lazy(() => import("~/pages/dash.layout"));
const DashIndexPage = lazy(() => import("~/pages/dash.index.page"));
const DashSettingsPage = lazy(() => import("~/pages/dash.settings.page"));
const NotFoundPage = lazy(() => import("~/pages/404.page"));

export default () => {
	return (
		<Routes>
			<Route path="/" element={<IndexPage />} />
			<Route path="/dash" element={<DashLayout />}>
				<Route path="/" element={<DashIndexPage />} />
				<Route path="/settings" element={<DashSettingsPage />} />
			</Route>
			<Route path="/*" element={<NotFoundPage />} />
		</Routes>
	);
};
