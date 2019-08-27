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

import Download from 'mdi-material-ui/Download'

const RESUME_PDF = 'https://raw.githubusercontent.com/Arunscape/resume/master/Arun_Woosaree_Resume.pdf'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    span: {
      flexGrow: 1,
    },
    button: {
      textTransform: 'none',
    }
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
              className={classes.button}
            >
              <Typography variant="h6" >
                About Me
              </Typography>
            </Button>)
            :
            (<Button
              color="inherit"
              onClick={() => history.push("/")}
              className={classes.button}

            >
              <Typography variant="h6" >
                About Me
              </Typography>
            </Button>)}


          <span className={classes.span} />

          {location.pathname === "/resume" && (
            <Button
              color="inherit"
              href={RESUME_PDF}
            >
              Download PDF
              <Download />
            </Button>

          )}

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