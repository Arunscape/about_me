import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header: React.FC = () => {


  return (
    <AppBar>
      <Toolbar>
        <Typography>
          About Me
        </Typography>
      </Toolbar>
    </AppBar>

  )
}

export default Header;