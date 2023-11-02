import { describe, expect, it } from "vitest";

import { render } from "@solidjs/testing-library";

import { Loader } from "./feedbacks.tsx";

describe("Loader", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Loader data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("svg");
	});
});
