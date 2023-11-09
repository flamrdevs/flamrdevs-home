import { style } from "@vanilla-extract/css";

import * as contract from "../../styles/contract.css.ts";
import * as tokens from "../../styles/tokens.ts";

const Root = style({
	...tokens.inline_block,
	...tokens.bg_cn_1,
	...tokens.overflow_hidden,
	...tokens.select_none,
});

const Img = style({
	...tokens.w_full,
	...tokens.h_full,
});

const Fallback = style({
	...tokens.block,
	...tokens.w_full,
	...tokens.h_full,
	...tokens.border_1,
	...tokens.border_solid,
	...tokens.border_cn_2,
	...tokens.opacity_10,
	backgroundColor: `${contract.colors.cn[9]}`,
	backgroundImage: `repeating-linear-gradient(45deg, ${contract.colors.cn[2]} 25%, transparent 25%, transparent 75%, ${contract.colors.cn[2]} 75%, ${contract.colors.cn[2]}), repeating-linear-gradient(45deg, ${contract.colors.cn[2]} 25%, ${contract.colors.cn[9]} 25%, ${contract.colors.cn[9]} 75%, ${contract.colors.cn[2]} 75%, ${contract.colors.cn[2]})`,
	backgroundPosition: "0 0, 10px 10px",
	backgroundSize: "20px 20px",
});

export { Root, Img, Fallback };
