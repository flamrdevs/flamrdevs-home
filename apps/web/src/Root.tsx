import type { ParentComponent } from "solid-js";

const Root: ParentComponent = (props) => {
	return <>{props.children}</>;
};

export default Root;
