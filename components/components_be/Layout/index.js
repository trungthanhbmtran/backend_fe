import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import AnimationIcon from './AnimationIcon';
import IconTool from './IconFB';
import Footer from './Footer';
import BackToTop from './ScrollOnTop';
import { Box } from '@mui/system';
import Header from './Header';
import AppBar from './AppBar';
import DrawerAppBar from './Drawer';
import { useTheme, styled } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import { useMediaQuery } from "@mui/material";
import * as Actions from '../../redux/Actions'

export default function Layout({ children }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(matches);

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));

  return (
    <Box >
      <div id="back-to-top-anchor" />
      <Header matches={matches} />
      <AppBar />
      <DrawerAppBar />
      <Box sx={{  mt : 7.3 , mb :2}}>
          {children}
      </Box>
      <BackToTop />
      <Footer />
      <AnimationIcon />
      <IconTool />
    </Box >
  );
}