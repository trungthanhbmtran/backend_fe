import { Tooltip,Fab,IconButton } from "@mui/material"
import AnimateButton from '../../../lib/ui-component/extended/AnimateButton';
import { useTheme } from "@mui/styles";
import { useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';

const IconTool = ()=>{
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };
return(
    <Tooltip title="Facebook">
                <Fab
                    component="div"
                    onClick={handleToggle}
                    variant="circular"
                    size="small"
                    sx={{
                        borderRadius: 0,
                        borderTopLeftRadius: '50%',
                        borderBottomLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                        borderBottomRightRadius: '4px',
                        top: '60%',
                        position: 'fixed',
                        right: 20,
                        zIndex: theme.zIndex.speedDial
                    }}
                >
                    <AnimateButton type="scale">
                        <IconButton color="inherit" disableRipple>
                                <FacebookIcon onClick={() => window.open('https://vi-vn.facebook.com/','popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no')} color="primary"/>
                        </IconButton>
                    </AnimateButton>
                </Fab>
                </Tooltip>
)
}

export default IconTool