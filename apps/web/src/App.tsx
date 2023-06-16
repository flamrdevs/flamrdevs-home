import { Suspense } from "solid-js";

import Router from "~/Router";
import Routes from "~/Routes";

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
