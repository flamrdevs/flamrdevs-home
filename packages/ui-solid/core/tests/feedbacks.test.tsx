import { describe, expect, it } from "vitest";

import {} from "@solidjs/testing-library";

import { renderRootElement } from "../../test.utils.tsx";

import { Loader } from "../feedbacks.tsx";

describe("Loader", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Loader {...props} />);
		expect(element.tagName).toEqual("svg");
	});
});
