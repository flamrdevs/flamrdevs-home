import { describe, expect, it } from "vitest";

import { render } from "@solidjs/testing-library";

import { Separator } from "./miscellaneous.tsx";

describe("Separator", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Separator data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("HR");
	});
});
