import { describe, expect, it } from "vitest";

import { A, renderRootElement } from "../../test.utils.tsx";

import { Link } from "../navigations.tsx";

describe("Link", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Link {...props} />);
		expect(element.tagName).toEqual("A");
	});

	it("Polymorphic", () => {
		const [element] = renderRootElement((props) => <Link as={A} {...props} />);
		expect(element.tagName).toEqual("A");
	});
});
