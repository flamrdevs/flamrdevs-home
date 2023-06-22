import { Center, Container, Flex, Separator, Text } from "~/components/core";
import { ButtonLink } from "~/components/router";

const NotFoundPage = () => {
	return (
		<Container max="md" p="4">
			<Separator orientation="horizontal" />

			<Flex ai="center" jc="center" style="height: 1.75rem">
				<Text family="mono" size="xl" weight={700} align="center">
					404
				</Text>
				<Separator orientation="vertical" />
				<Text family="mono" size="xl" weight={700} align="center">
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
