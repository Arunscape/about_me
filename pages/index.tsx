import { Title, Text, Anchor, Container, Grid, Image, Badge, Popover, AppShell, Header, Burger, MediaQuery, useMantineTheme } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useState } from 'react';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {

  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
   <>
      {/* header of some sort */}
      <AppShell
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
      <ColorSchemeToggle />

          </div>
        </Header>
      }>
      <section id="section-one">
        <Container>
          <Grid justify="space-around">
            <Grid.Col xs={6} sm={8} md={8} lg={8}>
              <Text >
                <Title order={1}>Hello There</Title>
                <Title order={6}>BSc. Computer Engineering Software Co-op University of Alberta</Title>
                <div>

                  My name is Arun. I'm a Software {
                    <Popover
                      opened={opened}
                      onClose={() => setOpened(false)}
                      position="bottom"
                      placement="center"
                      withArrow
                      trapFocus={false}
                      closeOnEscape={false}
                      transition="pop-top-left"
                      width={400}
                      styles={{ body: { pointerEvents: 'none' } }}
                      target={
                        <Anchor href="https://www.apega.ca/enforcement/rights" target="_blank">
                          <del onMouseEnter={() => setOpened(true)} onMouseLeave={() => setOpened(false)}>

                            Engineer
                          </del>
                        </Anchor>
                      }
                    >
                      <Text size="sm">
                        APEGA does not like non-members to use this word.
                        <Text size="sm">
                          My application to become an EIT (Engineer-In-Training) is in progress!

                        </Text>
                      </Text>
                    </Popover>} Developer who enjoys programming things, skiing, video games, listening to dubstep, and other normal human things, yes.
                </div>
              </Text>
            </Grid.Col>
            <Grid.Col xs={6} sm={4} md={4} lg={4}>
              <Image src="https://avatars.githubusercontent.com/arunscape" />
            </Grid.Col>
          </Grid>
        </Container>
      </section>
      </AppShell>
    </>
  );
}
