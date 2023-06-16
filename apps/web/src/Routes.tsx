import { Route, Routes } from "@flamrdevs/x-solid/modules/router";

import IndexPage from "~/pages/index.page";
import NotFoundPage from "~/pages/404.page";

export default () => {
	return (
		<Routes>
			<Route path="/" element={<IndexPage />} />
			<Route path="/*" element={<NotFoundPage />} />
		</Routes>
	);
};
