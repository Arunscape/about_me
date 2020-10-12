import React, { useEffect, useState, useContext } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

import IconButton from '@material-ui/core/IconButton';
import Github from 'mdi-material-ui/Github';

import { openNewTab } from '../../util'
import { ThemeContext } from '../../util/themeContext';


interface project {
  title: string,
  githuburl?: string,
  demourl?: string,
  description: string,
  previewimage: string,
  wip?: boolean,
  moreinfo?: string,
}

const useStyles = makeStyles(
  createStyles({
    card: {
      maxWidth: 400,
      minWidth: 345,
    },
    root: {
      flexGrow: 1,
      width: '95%',
      margin: "0 auto",
      marginTop: '2%',
    },
  }),
);



const PROJECTS_URL = 'https://raw.githubusercontent.com/Arunscape/About-Me/master/src/data/projects.json';

const Projects: React.FC = () => {
  // @ts-ignore
  const [theme, 
    // dispatch
  ] = useContext(ThemeContext);

  const style = {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'fixed',
    backgroundImage: theme.value ? "url('https://raw.githubusercontent.com/Arunscape/About-Me/master/src/images/btwiusearch.jpg')" : "url('https://raw.githubusercontent.com/Arunscape/About-Me/master/src/images/background.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    filter: "blur(4px)",
    zIndex: -1,
  }

  const classes = useStyles();

  const [projects, setProjects] = useState<project[] | null>(null)
  useEffect(() => {
    fetch(PROJECTS_URL)
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])



  if (!projects) {
    return <div>Loading...</div>
  }


  return (
    <>
      <Paper
        // @ts-ignore
        style={style}
      />

      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
          spacing={3}
        >
          {projects.map(p => (
            <Grid
              item
              // xl
              key={p.title}
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt=""
                    height="140"
                    image={p.previewimage}
                    title={p.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {p.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {p.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>

                  {p.demourl && (
                    <Button
                      size="small"
                      color="inherit"
                      onClick={() => openNewTab(p.demourl!)}
                    >
                      Demo
                  </Button>
                  )}

                  {p.githuburl && (
                    <IconButton
                      aria-label="View the souce code on GitHub"
                      onClick={() => openNewTab(p.githuburl!)}
                    >
                      <Github/>
                    </IconButton>
                  )}

                  {p.moreinfo && (
                    <Button
                      size="small"
                      color="inherit"
                      onClick={() => openNewTab(p.moreinfo!)}
                    >
                      More Info
                  </Button>
                  )}


                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}


export default Projects;

// in case the atb 101 url disappears
// https://web.archive.org/web/20190822230404/https://www.atb.com/learn/articles/Pages/atb-101-students-tackle-business-challenges.aspx