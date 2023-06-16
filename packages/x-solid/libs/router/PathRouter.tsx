import { Router, pathIntegration } from "@solidjs/router";
import type { RouterProps } from "@solidjs/router";

const integration = pathIntegration();

type PathRouterProps = Omit<RouterProps, "url" | "source">;

const PathRouter = (props: PathRouterProps) => <Router {...props} source={integration} />;

export type { PathRouterProps };
export { integration };
export default PathRouter;
