import {
  Title,
  Text,
  Anchor,
  Container,
  Grid,
  Image,
  Badge,
  Popover,
  AppShell,
  Header,
  Burger,
  MediaQuery,
  useMantineTheme,
  Timeline,
  TimelineItem,
  Button,
  Chip,
  Chips,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import Link from "next/link";
import { useState } from "react";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";

interface BadgesProps {
  badges: {
    link: string;
    content: string;
  }[];
}
const Badges = (props: BadgesProps) => {
  return (
    <>
      {props.badges.map((b) => (
        <Badge component="a" href={b.link} target="_blank" variant="outline">
          {b.content}
        </Badge>
      ))}
    </>
  );
};

const python = { link: "https://www.python.org/", content: "Python" };
const csharp = {
  link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  content: "C#",
};
const rust = { link: "https://www.rust-lang.org/", content: "rust" };
const golang = { link: "" };
const docker = { link: "https://go.dev/", content: "Go" };
const gitlab = { link: "https://gitlab.com/", content: "GitLab" };
const git = { link: "https://git-scm.com/", content: "Git" };
const jira = { link: "https://www.atlassian.com/software/jira", content: "JIRA" };
const gcp = { link: "https://cloud.google.com/", content: "Google Cloud Platform" };
const cplusplus = { link: "https://www.cplusplus.com/", content: "C++" };
const powershell = { link: "https://docs.microsoft.com/en-us/powershell/", content: "Powershell" };
const bash = { link: "https://www.gnu.org/software/bash/", content: "Bash" };
const kubernetes = { link: "https://kubernetes.io/", content: "Kubernetes" };
const java = { link: "https://www.java.com/", content: "Java" };
const javascript = { link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", content: "Javascript" };
const docusign = { link: "https://www.docusign.com/", content: "DocuSign" };
const box = { link: "https://www.box.com/", content: "Box" };
const react = { link: "https://reactjs.org/", content: "React" };
const redux = { link: "https://redux.js.org/", content: "Redux" };
const express = { link: "https://expressjs.com/", content: "Express" };
const jenkins = { link: "https://www.jenkins.io/", content: "Jenkins" };
const bluemix = { link: "https://cloud.ibm.com", content: "IBM Bluemix" };
const wasm = { link: "https://webassembly.org/", content: "WASM" };
const mongo = { link: "https://www.mongodb.com/", content: "MongoDB" };
const threejs = { link: "https://threejs.org/", content: "Three.js" };
const scala = { link: "https://www.scala-lang.org/", content: "Scala" };
const mpi = { link: "https://www.open-mpi.org/", content: "MPI" }
const commonlisp = { link: "https://common-lisp.net/", content: "CommonLisp" }
const matlab = { link: "https://www.mathworks.com/products/matlab.html", content: "MATLAB" }
const openmp = { link: "https://www.openmp.org/", content: "OpenMP" }
const android = { link: "https://developer.android.com/", content: "Android" }
const arduino = { link: "https://www.arduino.cc/", content: "Arduino" }


export default function HomePage() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (<>
    {/* header of some sort */}
    <AppShell
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Arun Woosaree</Text>
            <ColorSchemeToggle />
          </div>
        </Header>
      }
    >
      <section id="sec-1">
        <Container>
          <Grid justify="space-around">
            <Grid.Col xs={6} sm={8} md={8} lg={8}>
              <Text>
                <Title order={1}>Hello There</Title>
                <Title order={6}>
                  BSc. Computer Engineering Software Co-op University of
                  Alberta
                </Title>
                <div>
                  My name is Arun. I'm a Software{" "}
                  {
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
                      styles={{ body: { pointerEvents: "none" } }}
                      target={
                        <Anchor
                          href="https://www.apega.ca/enforcement/rights"
                          target="_blank"
                        >
                          <del
                            onMouseEnter={() => setOpened(true)}
                            onMouseLeave={() => setOpened(false)}
                          >
                            Engineer
                          </del>
                        </Anchor>
                      }
                    >
                      <Text size="sm">
                        APEGA does not like non-members to use this word.
                        <Text size="sm">
                          My application to become an EIT
                          (Engineer-In-Training) is in progress!
                        </Text>
                      </Text>
                    </Popover>
                  }{" "}
                  Developer who enjoys programming things, skiing, video
                  games, listening to dubstep, and other normal human things,
                  yes.
                </div>
              </Text>
            </Grid.Col>
            <Grid.Col xs={6} sm={4} md={4} lg={4}>
              <Image src="https://avatars.githubusercontent.com/arunscape" />
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      <section id="sec-2">
        <Title>Work Experience</Title>

        <div>
          <Link href="https://github.com/Arunscape/resume/raw/master/Arun_Woosaree_Resume.pdf">
            <Button>Download resume</Button>
          </Link>
        </div>
        <Timeline active={3} bulletSize={36} lineWidth={2}>
          <Timeline.Item
            bullet={<div>GD</div>}
            title={
              <Text size="lg">General Dynamics Mission Systems Canada</Text>
            }
          >
            <Text color="dimmed" size="md">
              Software Eng
            </Text>
            <ul>
              <li>
                <Text color="dimmed" size="sm">
                  Joint Canada UK operation
                </Text>
              </li>
            </ul>
            <Badges
              badges={[
                python,
                cplusplus,
                csharp,
                gitlab,
                docker,
                powershell,
                bash,
              ]}
            />
            <Text size="xs" mt={4}>
              January 2022 - Present
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<div>ATB</div>}
            title={<Text size="lg">ATB Financial</Text>}
          >
            <Text color="dimmed" size="md">
              Backend Developer
            </Text>
            <ul>
              <li>
                <Text color="dimmed" size="sm">
                  Automated the storage of customer files and documents,
                  ensuring the correct metadata and policies areapplied while
                  working on the Enterprise Content Management team
                </Text>
              </li>
            </ul>
            <Badges
              badges={[
                java,
                javascript,
                gcp,
                kubernetes,
                gitlab,
                docusign,
                box,
                jira,
              ]}
            />
            <Text size="xs" mt={4}>
              June 2020 - December 2020
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<div>ATB</div>}
            title={<Text size="lg">ATB Financial</Text>}
          >
            <Text color="dimmed" size="md">
              Full Stack Developer
            </Text>
            <ul>
              <li>
                <Text color="dimmed" size="sm">
                  Mentored a team of 10 people using agile practices to solve
                  a business case problem
                </Text>
              </li>
              <li>
                <Text color="dimmed" size="sm">
                  Migrated microservices from IBM Bluemix to Google Cloud
                  Platform
                </Text>
              </li>
              <li>
                <Text color="dimmed" size="sm">
                  Worked on the frontend and backend for ATB’s new online
                  banking website for business customers
                </Text>
              </li>
            </ul>
            <Badges
              badges={[
                react,
                redux,
                express,
                gcp,
                docker,
                kubernetes,
                jenkins,
                java,
                python,
                jira
              ]}/>
              <Text size="xs" mt={4}>
              January 2019 - August 2019
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<div>ATB</div>}
            title={<Text size="lg">ATB Financial</Text>}
          //lineVariant="dashed"
          >
            <Text color="dimmed" size="md">
              ATB 101 Developer
            </Text>
            <ul>
              <li>
                <Text color="dimmed" size="sm">
                  Winning team for the ”Capstone Project”. It is a case
                  competition-like format, but lasts 4 months and eachteam of
                  10 tackled different problems. More info :
                  https://www.atb.com/company/careers/atb-101/
                </Text>
              </li>
              <li>
                <Text color="dimmed" size="sm">
                  Worked on UI and backend for ATB’s new online banking
                  website for business customers
                </Text>
              </li>
            </ul>
            <Badges
              badges={[
                react,
                redux,
                express,
                docker,
                jira,
                bluemix
              ]}/>
            <Text size="xs" mt={4}>
              May 2018 - August 2018
            </Text>
          </Timeline.Item>
        </Timeline>
      </section>
    </AppShell>
  </>
  );
}