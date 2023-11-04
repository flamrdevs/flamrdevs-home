import { describe, expect, it } from "vitest";

import {} from "@solidjs/testing-library";

import { renderRootElement } from "../test.utils.tsx";

import AnimatedSVGLogo from "./AnimatedSVGLogo.tsx";

describe("AnimatedSVGLogo", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <AnimatedSVGLogo {...props} />);
		expect(element.tagName).toEqual("svg");
	});
});
