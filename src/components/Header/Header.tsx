import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useReactRouter from 'use-react-router';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Header: React.FC = () => {
  const classes = useStyles();
  const { history, location } = useReactRouter();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {location.pathname === "/" ?
            (<Button
              color="inherit"
              style={{ textTransform: "none" }}
            >
              <Typography variant="h6" className={classes.title}>
                About Me
              </Typography>
            </Button>)
            :
            (<Button
              color="inherit"
              onClick={() => history.push("/")}
              style={{ textTransform: "none" }}

            >
              <Typography variant="h6" className={classes.title}>
                About Me
              </Typography>
            </Button>)}


        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header