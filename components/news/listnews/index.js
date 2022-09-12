import {Typography,Grid, Divider} from "@mui/material"
import Link from "../../../lib/Link";

const ListNews = ({time,title,subid,group})=>{
  //  console.log('group',group)
    return(
        <Link href={`./post/${group}/${subid}`} variant="body2" underline="none">
          <Grid container  spacing={2}>
            <Grid item xs={3}>
              <Typography>{time}</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography>{title}</Typography>
            </Grid>
          </Grid>
          <Divider/>
        </Link>
    )
}

export default ListNews