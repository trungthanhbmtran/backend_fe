import { Box } from '@mui/material';
import { menu } from '../../../../data/menu';
import MenuItems from '../menu';

const Navigator = () =>{
    return(
        <Box component="ul" sx={{display : { xs: 'none', sm: 'block'}}} >
        {/* {navItems.map((item,i) => <Menu key={i} item={item}/>)} */}
        <ul className="menus">
            {menu.map((menu,index) => {
            const depthLevel = 0;
            return  <MenuItems items={menu} key={index} depthLevel={depthLevel} />}
            )}
        </ul>
      </Box>
    )
}

export default Navigator