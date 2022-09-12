import { Box,Grid,Typography } from "@mui/material"
import Image from "next/image"

const Organization = () =>{
    return(
        <Box
        sx={{
            p: { xs: 4, md: 10 },
            pt: 12,
            pb: 12,
            fontSize: { xs: '12px', md: '14px' }
        }}
        >
            <Grid        
                container
                spacing={{ xs: 2, md: 3 }}
                justifyContent="center"
                alignItems="center"
                sx={{ margin: `20px 4px 10px 4px` }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item textAlign="center" md={12} lg={4} >
                 <Typography variant="h6" component="div" >SƠ ĐỒ BỘ MÁY TỔ CHỨC</Typography>
              </Grid>
              <Grid item textAlign="center"  md={12} lg={4} >
                <Image src="/sodobomay.png"  alt="oranganzation" width={600} height={420}></Image>
              </Grid>
              </Grid>
        </Box>
    )
   
}

export default Organization