import { Show } from "solid-js";

import { GithubIcon, MoonIcon, SunIcon } from "lucide-solid";

import { LINK } from "@flamrdevs/const/exports";

import { useStore } from "@flamrdevs/x-solid/libs/store";

import { Box, Button, Container, Flex, IconButton, Loader, Separator, Text } from "~/components/core";
import { ButtonLink, IconButtonLink } from "~/components/router";

import { ThemeStore, toggleTheme } from "~/stores/theme";

import * as UICSS from "~/styles/pages/ui.css";

const UICorePage = () => {
	const theme = useStore(ThemeStore);

	return (
		<>
			<Container max="lg" p="4">
				<Flex ai="center" style="height: 1.75rem">
					<ButtonLink href="/">home</ButtonLink>
					<Separator orientation="vertical" />
					<ButtonLink href="/ui">ui</ButtonLink>
					<Separator orientation="vertical" />
					<IconButton onClick={toggleTheme}>
						<Show when={theme() === "dark"} fallback={<MoonIcon />}>
							<SunIcon />
						</Show>
					</IconButton>
				</Flex>
			</Container>

			<Container max="lg" p="4">
				<Box>
					<Text family="mono" size="lg" weight={600}>
						Color
					</Text>

					<Box p="2">
						<Box>
							<Text family="mono" size="md" weight={400}>
								Neutral
							</Text>

							<Flex gap="2">
								<Box class={UICSS.color.neutral[1]} />
								<Box class={UICSS.color.neutral[2]} />
								<Box class={UICSS.color.neutral[3]} />
								<Box class={UICSS.color.neutral[4]} />
								<Box class={UICSS.color.neutral[5]} />
								<Box class={UICSS.color.neutral[6]} />
								<Box class={UICSS.color.neutral[7]} />
								<Box class={UICSS.color.neutral[8]} />
								<Box class={UICSS.color.neutral[9]} />
								<Box class={UICSS.color.neutral[10]} />
								<Box class={UICSS.color.neutral[11]} />
								<Box class={UICSS.color.neutral[12]} />
							</Flex>
						</Box>

						<Box>
							<Text family="mono" size="md" weight={400}>
								Primary
							</Text>

							<Flex gap="2">
								<Box class={UICSS.color.primary[1]} />
								<Box class={UICSS.color.primary[2]} />
								<Box class={UICSS.color.primary[3]} />
								<Box class={UICSS.color.primary[4]} />
								<Box class={UICSS.color.primary[5]} />
								<Box class={UICSS.color.primary[6]} />
								<Box class={UICSS.color.primary[7]} />
								<Box class={UICSS.color.primary[8]} />
								<Box class={UICSS.color.primary[9]} />
								<Box class={UICSS.color.primary[10]} />
								<Box class={UICSS.color.primary[11]} />
								<Box class={UICSS.color.primary[12]} />
							</Flex>
						</Box>

						<Box>
							<Text family="mono" size="md" weight={400}>
								Success
							</Text>

							<Flex gap="2">
								<Box class={UICSS.color.success[1]} />
								<Box class={UICSS.color.success[2]} />
								<Box class={UICSS.color.success[3]} />
								<Box class={UICSS.color.success[4]} />
								<Box class={UICSS.color.success[5]} />
								<Box class={UICSS.color.success[6]} />
								<Box class={UICSS.color.success[7]} />
								<Box class={UICSS.color.success[8]} />
								<Box class={UICSS.color.success[9]} />
								<Box class={UICSS.color.success[10]} />
								<Box class={UICSS.color.success[11]} />
								<Box class={UICSS.color.success[12]} />
							</Flex>
						</Box>

						<Box>
							<Text family="mono" size="md" weight={400}>
								Info
							</Text>

							<Flex gap="2">
								<Box class={UICSS.color.info[1]} />
								<Box class={UICSS.color.info[2]} />
								<Box class={UICSS.color.info[3]} />
								<Box class={UICSS.color.info[4]} />
								<Box class={UICSS.color.info[5]} />
								<Box class={UICSS.color.info[6]} />
								<Box class={UICSS.color.info[7]} />
								<Box class={UICSS.color.info[8]} />
								<Box class={UICSS.color.info[9]} />
								<Box class={UICSS.color.info[10]} />
								<Box class={UICSS.color.info[11]} />
								<Box class={UICSS.color.info[12]} />
							</Flex>
						</Box>

						<Box>
							<Text family="mono" size="md" weight={400}>
								Warning
							</Text>

							<Flex gap="2">
								<Box class={UICSS.color.warning[1]} />
								<Box class={UICSS.color.warning[2]} />
								<Box class={UICSS.color.warning[3]} />
								<Box class={UICSS.color.warning[4]} />
								<Box class={UICSS.color.warning[5]} />
								<Box class={UICSS.color.warning[6]} />
								<Box class={UICSS.color.warning[7]} />
								<Box class={UICSS.color.warning[8]} />
								<Box class={UICSS.color.warning[9]} />
								<Box class={UICSS.color.warning[10]} />
								<Box class={UICSS.color.warning[11]} />
								<Box class={UICSS.color.warning[12]} />
							</Flex>
						</Box>

						<Box>
							<Text family="mono" size="md" weight={400}>
								Danger
							</Text>

							<Flex gap="2">
								<Box class={UICSS.color.danger[1]} />
								<Box class={UICSS.color.danger[2]} />
								<Box class={UICSS.color.danger[3]} />
								<Box class={UICSS.color.danger[4]} />
								<Box class={UICSS.color.danger[5]} />
								<Box class={UICSS.color.danger[6]} />
								<Box class={UICSS.color.danger[7]} />
								<Box class={UICSS.color.danger[8]} />
								<Box class={UICSS.color.danger[9]} />
								<Box class={UICSS.color.danger[10]} />
								<Box class={UICSS.color.danger[11]} />
								<Box class={UICSS.color.danger[12]} />
							</Flex>
						</Box>
					</Box>
				</Box>

				<Separator orientation="horizontal" />

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
								Color
							</Text>

							<Flex gap="2">
								<Box>
									<Button color="neutral">neutral</Button>
								</Box>
								<Box>
									<Button color="primary">primary</Button>
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

						<Box>
							<Text family="mono" size="md" weight={400}>
								Link
							</Text>

							<Flex gap="2">
								<Box>
									<ButtonLink href={LINK.GITHUB} target="_blank">
										github
									</ButtonLink>
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
								Color
							</Text>

							<Flex gap="2">
								<Box>
									<IconButton color="neutral">
										<MoonIcon />
									</IconButton>
								</Box>
								<Box>
									<IconButton color="primary">
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

						<Box>
							<Text family="mono" size="md" weight={400}>
								Link
							</Text>

							<Flex gap="2">
								<Box>
									<IconButtonLink href={LINK.GITHUB} target="_blank">
										<GithubIcon />
									</IconButtonLink>
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

				<Separator orientation="horizontal" />

				<Box>
					<Text family="mono" size="lg" weight={600}>
						Loader
					</Text>

					<Box p="2">
						<Box>
							<Text family="mono" size="md" weight={400}>
								Default
							</Text>

							<Flex gap="2">
								<Box>
									<Loader />
								</Box>
							</Flex>
						</Box>

						<Box>
							<Text family="mono" size="md" weight={400}>
								Color
							</Text>

							<Flex gap="2">
								<Box>
									<Loader color="neutral" />
								</Box>
								<Box>
									<Loader color="primary" />
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
