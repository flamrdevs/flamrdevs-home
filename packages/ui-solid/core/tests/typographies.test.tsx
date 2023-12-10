import { describe, expect, it } from "vitest";

import { Span, renderRootElement } from "../../test.utils.tsx";

import { Text } from "../typographies.tsx";

describe("Text", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Text {...props} />);
		expect(element.tagName).toEqual("DIV");
	});

	it("Polymorphic", () => {
		const [element] = renderRootElement((props) => <Text as={Span} {...props} />);
		expect(element.tagName).toEqual("SPAN");
	});
});
