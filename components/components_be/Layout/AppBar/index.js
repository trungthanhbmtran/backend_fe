import * as React from 'react';
import PropTypes from 'prop-types';
import AppBarMUI from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
// import Image from 'next/image';
// import Menu from './menu';
// import { filterProps } from 'framer-motion';
import { ListSubheader } from '@mui/material';
import { useDispatch } from "react-redux";
import * as Actions from '../../../redux/Actions'
import Navigator from './Navigator';

function AppBar() {
  const dispatch = useDispatch();
  return (
    <ListSubheader sx={{ bgcolor: 'background.paper', zIndex:999 }}>
      <AppBarMUI position='absolute' color="primary" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => dispatch(Actions.default.set_drawerOpen(true)) }
            sx={{ mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Navigator />
          <Box sx={{ flexGrow: 1}} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBarMUI>
    </ListSubheader>

  );
}

AppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AppBar;