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
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const GITHUB_AVATAR="https://avatars0.githubusercontent.com/u/8227297"
const JOKE_API="https://sv443.ddns.net/jokeapi/category/Programming"

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
  

  function handleExpandClick() {
    setExpanded(!expanded);
  }

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
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
              {fetch(JOKE_API).then(res => res)}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default AboutCard;