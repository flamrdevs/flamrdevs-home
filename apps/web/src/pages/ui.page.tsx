import { MoonIcon } from "lucide-solid";

import { Box, Button, Container, Flex, IconButton, Separator, Text } from "~/components/core";
import { ButtonLink } from "~/components/router";

const UICorePage = () => {
	return (
		<>
			<Container max="md" p="4">
				<Flex ai="center" style="height: 1.75rem">
					<ButtonLink href="/">home</ButtonLink>
					<Separator orientation="vertical" />
					<ButtonLink href="/ui">ui</ButtonLink>
				</Flex>
			</Container>

			<Container max="md" p="4">
				<Box>
					<Text family="mono" size="lg" weight={600}>
						Button
					</Text>

					<Box p="2">
						<Box>
							<Text family="mono" size="md" weight={400}>
								Default
							</Text>

							<Flex gap="2">
								<Box>
									<Button>default</Button>
								</Box>
							</Flex>
						</Box>

						<Box>
							<Text family="mono" size="md" weight={400}>
								State
							</Text>

							<Flex gap="2">
								<Box>
									<Button>enabled</Button>
								</Box>
								<Box>
									<Button disabled>disabled</Button>
								</Box>
							</Flex>
						</Box>
					</Box>
				</Box>

				<Separator orientation="horizontal" />

				<Box>
					<Text family="mono" size="lg" weight={600}>
						Icon Button
					</Text>

					<Box p="2">
						<Box>
							<Text family="mono" size="md" weight={400}>
								Default
							</Text>

							<Flex gap="2">
								<Box>
									<IconButton>
										<MoonIcon />
									</IconButton>
								</Box>
							</Flex>
						</Box>

						<Box>
							<Text family="mono" size="md" weight={400}>
								State
							</Text>

							<Flex gap="2">
								<Box>
									<IconButton>
										<MoonIcon />
									</IconButton>
								</Box>
								<Box>
									<IconButton disabled>
										<MoonIcon />
									</IconButton>
								</Box>
							</Flex>
						</Box>
					</Box>
				</Box>

				<Separator orientation="horizontal" />

				<Box>
					<Text family="mono" size="lg" weight={600}>
						Text
					</Text>

					<Box p="2">
						<Box>
							<Text family="mono" size="md" weight={400}>
								Default
							</Text>

							<Flex gap="2">
								<Box>
									<Text>default</Text>
								</Box>
							</Flex>
						</Box>

						<Box>
							<Text family="mono" size="md" weight={400}>
								Family
							</Text>

							<Flex gap="2">
								<Box>
									<Text family="sans">sans</Text>
								</Box>
								<Box>
									<Text family="mono">mono</Text>
								</Box>
							</Flex>
						</Box>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default UICorePage;
