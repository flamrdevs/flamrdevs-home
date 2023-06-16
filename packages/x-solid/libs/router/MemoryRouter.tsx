import { Router, memoryIntegration } from "@solidjs/router";
import type { RouterProps } from "@solidjs/router";

const integration = memoryIntegration();

type MemoryRouterProps = Omit<RouterProps, "url" | "source">;

const MemoryRouter = (props: MemoryRouterProps) => <Router {...props} source={integration} />;

export type { MemoryRouterProps };
export { integration };
export default MemoryRouter;
