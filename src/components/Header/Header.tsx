import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch'


import WhiteBalanceSunny from 'mdi-material-ui/WhiteBalanceSunny'
import WeatherNight from 'mdi-material-ui/WeatherNight'

import useReactRouter from 'use-react-router';

import { ThemeContext } from '../../util/themeContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      flex: 1,
    },
  }),
);

const Header: React.FC = () => {
  const classes = useStyles();
  const { history, location } = useReactRouter();

  // @ts-ignore
  const [theme, dispatch] = useContext(ThemeContext);

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

          <Switch
            // @ts-ignore
            checked={theme.value}
            // @ts-ignore
            onChange={(event) => {

              if (event.target.checked) {
                dispatch({ type: 'darkMode' })
              } else {
                dispatch({ type: 'lightMode' })
              }

            }
            }
            value="toggle"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />

          {
            theme.value ?
              <WeatherNight /> :
              <WhiteBalanceSunny />

          }

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header