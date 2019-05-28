import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import useReactRouter from 'use-react-router';

const Header: React.FC = () => {

  const { 
    history, 
    location, 
    // match 
  } = useReactRouter();


  return (
    <AppBar>
      <Toolbar>
        <Typography 
          style={{
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            KhtmlUserSelect: 'none',
            MozUserSelect: 'none',
            MsUserSelect: 'none',
            userSelect: 'none',
          }}
          variant="h6"
          color="inherit"
          onClick={location.pathname==='/' ? ()=>{} : ()=> history.push('/')}
        >
          About Me
        </Typography>
      </Toolbar>
    </AppBar>

  )
}

export default Header;