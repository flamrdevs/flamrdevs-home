import Box from "@flamrdevs/ui-solid/core/Box";
import Text from "@flamrdevs/ui-solid/core/Text";
import Separator from "@flamrdevs/ui-solid/core/Separator";
import Button from "@flamrdevs/ui-solid/core/Button";

import { toggleTheme } from "~/stores/theme";

import * as StyleCSS from "./index.page.css";

const IndexPage = () => {
	return (
		<Box p="md" class={StyleCSS.Root}>
			<Text family="mono" size="xl" weight={700} align="center">
				flamrdevs
			</Text>
			<Separator orientation="horizontal" />
			<Button font="mono" onClick={toggleTheme}>
				theme
			</Button>
		</Box>
	);
};

export default IndexPage;
