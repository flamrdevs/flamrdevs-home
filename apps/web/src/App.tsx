import { Suspense, lazy } from "solid-js";

import { Route, Router } from "@flamrdevs/x-solid/modules/router.ts";

import Root from "~/Root.tsx";

const IndexPage = lazy(() => import("~/pages/index.page.tsx"));
const DashLayout = lazy(() => import("~/pages/dash.layout.tsx"));
const DashIndexPage = lazy(() => import("~/pages/dash.index.page.tsx"));
const DashSettingsPage = lazy(() => import("~/pages/dash.settings.page.tsx"));
const UIPage = lazy(() => import("~/pages/ui.page.tsx"));
const NotFoundPage = lazy(() => import("~/pages/404.page.tsx"));

const App = () => {
	return (
		<Suspense>
			<Router root={Root}>
				<Route path="/" component={IndexPage} />
				<Route path="/dash" component={DashLayout}>
					<Route path="/" component={DashIndexPage} />
					<Route path="/settings" component={DashSettingsPage} />
				</Route>
				<Route path="/ui" component={UIPage} />
				<Route path="/*" component={NotFoundPage} />
			</Router>
		</Suspense>
	);
};

export default App;
