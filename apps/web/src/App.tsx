import { Suspense } from "solid-js";

import Router from "~/Router.tsx";
import Routes from "~/Routes.tsx";

const App = () => {
	return (
		<Router>
			<Suspense>
				<Routes />
			</Suspense>
		</Router>
	);
};

export default App;
