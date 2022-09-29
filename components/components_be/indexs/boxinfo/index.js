import { Button, Typography,Box  } from "@mui/material"
import Link from "../../../lib/Link"

const BoxInfo =({tittle,component,path}) =>{
    return(
        <Box >
            <Typography variant="h3" color='primary' textAlign='center'>{tittle}</Typography>
                {component}
            <Box textAlign='center' sx={{ marginTop : 2}} >
                <Link href={path}  underline="none" textAlign='center' ><Button variant="contained">Xem Thêm</Button></Link>
            </Box>
        </Box>
    )
}

export default BoxInfo