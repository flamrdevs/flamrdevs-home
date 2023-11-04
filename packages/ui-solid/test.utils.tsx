import type { Component, JSX } from "solid-js";

import { render } from "@solidjs/testing-library";

type RenderBaseOptions = {
	container?: HTMLElement;
	wrapper?: Component<{
		children: JSX.Element;
	}>;
};

export const Div = (props: JSX.HTMLAttributes<HTMLDivElement>) => <div {...props} />;
export const Span = (props: JSX.HTMLAttributes<HTMLSpanElement>) => <span {...props} />;
export const A = (props: JSX.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />;

const renderRootElement = (Callback: (props: { ["data-testid"]?: string }) => JSX.Element, options?: RenderBaseOptions) => {
	const testId = "root";
	const result = render(() => <Callback data-testid={testId} />, options);
	const element = result.getByTestId(testId);
	return [element, result] as const;
};

export { renderRootElement };
