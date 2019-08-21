import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


interface project {
  title: string,
  githuburl?: string,
  demourl?: string,
  description: string,
  previewimage: string,
  wip?: boolean,
}

const useStyles = makeStyles(
  createStyles({
    card: {
      maxWidth: 345,
    },
    root: {
      flexGrow: 1,
      width: '95%',
      margin: "0 auto",
      marginTop: '1%',
    },
  }),
);

const PROJECTS_URL = 'https://raw.githubusercontent.com/Arunscape/About-Me/master/src/data/projects.json';

const Projects: React.FC = () => {

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

    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="baseline"
        spacing={3}
      >
        {projects.map(p => (
          <Grid
            item
            xl
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
                <Button size="small" color="primary">
                  Share
                  </Button>
                <Button size="small" color="primary">
                  Learn More
                  </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>

  )
}


export default Projects;