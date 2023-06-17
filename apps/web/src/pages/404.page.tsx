import Box from "@flamrdevs/ui-solid/core/Box";
import Text from "@flamrdevs/ui-solid/core/Text";
import Separator from "@flamrdevs/ui-solid/core/Separator";

import * as StyleCSS from "./404.page.css";

const NotFoundPage = () => {
	return (
		<Box p="md" class={StyleCSS.Root}>
			<Text family="mono" size="xl" weight={700}>
				404
			</Text>
			<Separator orientation="vertical" />
			<Text family="mono" size="xl" weight={700}>
				not found
			</Text>
		</Box>
	);
};

export default NotFoundPage;
