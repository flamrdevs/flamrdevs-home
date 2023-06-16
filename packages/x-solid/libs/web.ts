import type { JSX } from "solid-js";
import { render } from "solid-js/web";

const root = (code: () => JSX.Element) => render(code, document.getElementById("root")!);

export { root };
