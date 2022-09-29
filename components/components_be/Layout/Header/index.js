import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "../../../lib/Link";

export default function Header({matches}) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={5}>
                <Link href="/" underline="none" sx={{ display: { sm: 'block' } }}>
                {
                    matches ? <Image src="/logo.png" width={160} height={80} alt="logo " ></Image>  
                   : <Image src="/logo-text.png" width={700} height={106.05} alt="logo " ></Image>             
                    // <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                    //   Công ty cổ phần thí nghiệm điện Việt Nam
                    //   VN ETC
                    // </Typography>
                }
                </Link>            
            </Grid>
         
        </Grid>
        )
}
