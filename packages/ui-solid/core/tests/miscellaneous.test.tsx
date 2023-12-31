import { describe, expect, it } from "vitest";

import { renderRootElement } from "../../test.utils.tsx";

import { Separator } from "../miscellaneous.tsx";

describe("Separator", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Separator {...props} />);
		expect(element.tagName).toEqual("HR");
	});
});
