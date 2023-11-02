import { describe, expect, it } from "vitest";

import { render } from "@solidjs/testing-library";

import { Box, Block, Flex, Center, Grid, Container } from "./layouts.tsx";

describe("Box", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Box data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("DIV");
	});

	it("Polymorphic", () => {
		const { getByTestId } = render(() => <Box as="a" data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("A");
	});
});

describe("Block", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Block data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("DIV");
	});

	it("Polymorphic", () => {
		const { getByTestId } = render(() => <Block as="a" data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("A");
	});
});

describe("Flex", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Flex data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("DIV");
	});

	it("Polymorphic", () => {
		const { getByTestId } = render(() => <Flex as="a" data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("A");
	});
});

describe("Center", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Center data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("DIV");
	});

	it("Polymorphic", () => {
		const { getByTestId } = render(() => <Center as="a" data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("A");
	});
});

describe("Grid", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Grid data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("DIV");
	});

	it("Polymorphic", () => {
		const { getByTestId } = render(() => <Grid as="a" data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("A");
	});
});

describe("Container", () => {
	it("Basic", () => {
		const { getByTestId } = render(() => <Container data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("DIV");
	});

	it("Polymorphic", () => {
		const { getByTestId } = render(() => <Container as="a" data-testid="root" />);
		const element = getByTestId("root");
		expect(element.tagName).toEqual("A");
	});
});
