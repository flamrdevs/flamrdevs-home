import { Center, Container, Flex, Separator, Text } from "~/components/core";
import { ButtonLink } from "~/components/router";

const NotFoundPage = () => {
	return (
		<Container max="lg" p="4">
			<Separator orientation="horizontal" />

			<Flex ai="-:-" jc="-:-" style="height: 1.75rem">
				<Text family="mono" size="5" weight="7" align="-:-">
					404
				</Text>
				<Separator orientation="vertical" />
				<Text family="mono" size="5" weight="7" align="-:-">
					not found
				</Text>
			</Flex>

			<Separator orientation="horizontal" />

			<Center gap="2">
				<ButtonLink href="/">home</ButtonLink>
			</Center>
		</Container>
	);
};

export default NotFoundPage;
