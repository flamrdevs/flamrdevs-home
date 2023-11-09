import { describe, expect, it, vi } from "vitest";

import { fireEvent } from "@solidjs/testing-library";

import { A, renderRootElement } from "../../test.utils.tsx";

import { Button, IconButton } from "../buttons.tsx";

describe("Button", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <Button {...props} />);
		expect(element.tagName).toEqual("BUTTON");
	});

	it("Polymorphic", () => {
		const [element] = renderRootElement((props) => <Button as={A} {...props} />);
		expect(element.tagName).toEqual("A");
	});

	it("Clicky", () => {
		const handleClick = vi.fn();
		const [element] = renderRootElement((props) => <Button {...props} onClick={handleClick} />);
		fireEvent.click(element);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});

describe("IconButton", () => {
	it("Basic", () => {
		const [element] = renderRootElement((props) => <IconButton {...props} />);
		expect(element.tagName).toEqual("BUTTON");
	});

	it("Polymorphic", () => {
		const [element] = renderRootElement((props) => <IconButton as={A} {...props} />);
		expect(element.tagName).toEqual("A");
	});

	it("Clicky", () => {
		const handleClick = vi.fn();
		const [element] = renderRootElement((props) => <IconButton {...props} onClick={handleClick} />);
		fireEvent.click(element);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
