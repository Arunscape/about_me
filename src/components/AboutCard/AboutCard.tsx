import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';


import GithubCircle from 'mdi-material-ui/GithubCircle'
import Linkedin from 'mdi-material-ui/Linkedin'
import At from 'mdi-material-ui/At'

const GITHUB_AVATAR="https://avatars0.githubusercontent.com/u/8227297"
const JOKE_API="https://sv443.ddns.net/jokeapi/category/Programming"
interface jokeapiResponse{
    category: string,
    type: string,
    joke?: string,
    setup?: string,
    delivery?: string,
    id: number,
}

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
    //   backgroundColor: red[500],
    width: 80, 
    height: 80
    },
  }),
);

const AboutCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


//   const [joke, setJoke] = React.useState(null);
  const [joke, setJoke] = React.useState<jokeapiResponse | null>(null)
  React.useEffect( ()=>{
      fetch(JOKE_API)
        .then(res=> res.json())
        .then(data => setJoke(data))
  }, [])

  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{
            title: classes.title
        }}
        avatar={
          <Avatar className={classes.avatar} src={GITHUB_AVATAR}/>
        }
        // action={
        //   <IconButton>
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Arun Woosaree"
        subheader="4th Year Computer Software Engineering Student at the University of Alberta"
      />
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum do lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <IconButton aria-label="Github" href="/github">
          <GithubCircle/>
        </IconButton>
        <IconButton aria-label="Linkedin" href="/linkedin">
          <Linkedin />
        </IconButton>
        <IconButton aria-label="Email" href="/email">
            <At />
        </IconButton>
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
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default AboutCard;