import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';
import useReactRouter from 'use-react-router';

import Github from 'mdi-material-ui/Github';
import Linkedin from 'mdi-material-ui/Linkedin'
import At from 'mdi-material-ui/At'
import Coffee from 'mdi-material-ui/Coffee'
import ClipboardTextOutline from 'mdi-material-ui/ClipboardTextOutline'
import Refresh from 'mdi-material-ui/Refresh'

import { openNewTab } from '../../util'

const GITHUB_AVATAR = "https://avatars0.githubusercontent.com/u/8227297"
const JOKE_API = "https://sv443.net/jokeapi/category/Programming"
const JOKE_API_BACKUP = "https://sv443.ddns.net/jokeapi/category/Programming"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 400,
    },
    title: {
      fontSize: 20,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      width: 80,
      height: 80
    },
    refreshJoke: {
      float: 'right'
    },
  }),
);

const AboutCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const { history } = useReactRouter();


  interface jokeapiResponse {
    category: string,
    type: string,
    joke?: string,
    setup?: string,
    delivery?: string,
    id: number,
  }
  const [joke, setJoke] = React.useState<jokeapiResponse | null>(null)

  const getJoke = (url: string) =>
    fetch(url)
      .then(res => res.json())
      .then(data => data)

  const setTheJoke = async () => {
    const jokeResponse = await getJoke(JOKE_API);

    if (!jokeResponse) {
      const backupJokeResponse = await getJoke(JOKE_API_BACKUP);
      setJoke(backupJokeResponse);
    }

    setJoke(jokeResponse);
  }

  React.useEffect(() => {
    setTheJoke();
  }, [])

  const buttons = [
    {
      title: 'Github',
      route: '/github',
      icon: <Github />,
      newTab: true,
    },
    {
      title: 'Linkedin',
      route: '/linkedin',
      icon: <Linkedin />,
      newTab: true,
    },
    {
      title: 'Email',
      route: '/email',
      icon: <At />,
      newTab: true,
    },
    {
      title: "Résumé",
      route: '/resume',
      icon: <ClipboardTextOutline />,
      newTab: false,
    },
    {
      title: "Projects",
      route: "/projects",
      icon: <Coffee />,
      newTab: false,
    }
  ]

  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{
          title: classes.title
        }}
        avatar={
          <Avatar className={classes.avatar} src={GITHUB_AVATAR} />
        }
        title="Arun Woosaree"
        subheader="4th Year Computer Software Engineering Student at the University of Alberta"
      />
      <CardActions disableSpacing>


        {buttons.map(({ title, route, icon, newTab }) => (
          <Tooltip
            disableFocusListener
            title={title}
            key={title}
          >
            <IconButton
              aria-label={title}
              onClick={newTab ? () => openNewTab(route) : () => history.push(route)}
            >
              {icon}
            </IconButton>
          </Tooltip>
        ))}

        <Tooltip disableFocusListener title="Random Joke!">
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {
            joke && joke.joke && (
              <Typography>
                {joke.joke}
              </Typography>
            )
          }
          {
            joke && joke.setup && joke.delivery && (
              <>
                <Typography paragraph>
                  {joke.setup}
                </Typography>

                <Typography>
                  {joke.delivery}
                </Typography>
              </>
            )
          }
          {!joke && <div>Loading Joke...</div>}
          <Tooltip
            disableFocusListener
            title="Get a new joke"
            className={classes.refreshJoke}
          >
            <IconButton
              onClick={() => setTheJoke()}
            >
              <Refresh />
            </IconButton>
          </Tooltip>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default AboutCard;