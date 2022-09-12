import { Box, Divider, Drawer, List } from '@mui/material';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { menu } from '../../../data/menu';
import Link from '../../../lib/Link';
import MenuItem from '../AppBar/menu/index';
import { useDispatch,useSelector } from "react-redux";
import * as Actions from '../../../redux/Actions'
import { DrawerWidth } from '../../../lib/theme';

 const DrawerAppBar = (props) =>{
    const { window } = props;
    const dispatch = useDispatch();
    
    // const DrawerOpen = useSelector(state => state.drawerOpen)

    // const [mobileOpen, setMobileOpen] = useState(false);

    // const handleDrawerToggle = () => {
    //   setMobileOpen(!mobileOpen);
    // };


    
    const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
          {/* <Typography variant="h6" sx={{ my: 2 }}>
            MUI
          </Typography> */}
        
          <Divider />
          <List>
            {/* {navItems.map((item,i) => <Menu key={i} item={item}/>)} */}
            {menu.map((item, key) => <MenuItem key={key} item={item} />)}
            {/* {navItems.map((list,listIndex) => {
          }
          )} */}
    
    
            {/* {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))} */}
          </List>
        </Box>
      );

    return (
        <Box component="nav" >
            <Drawer
                container={container}
                open={useSelector(state => state.drawerOpen)}
                onClose={() => dispatch(Actions.default.set_drawerOpen(false)) }
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DrawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    )
}

export default DrawerAppBar