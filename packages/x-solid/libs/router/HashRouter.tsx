import { Router, hashIntegration } from "@solidjs/router";
import type { RouterProps } from "@solidjs/router";

const integration = hashIntegration();

type HashRouterProps = Omit<RouterProps, "url" | "source">;

const HashRouter = (props: HashRouterProps) => <Router {...props} source={integration} />;

export type { HashRouterProps };
export { integration };
export default HashRouter;
