import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "../../../lib/Link";

export default function Header({matches}) {
    return (
        <Grid container sx={{ backgroundColor: "green", padding: "10px" }} >
            <Grid item xs={5}>
                <Link href="/" underline="none" sx={{ display: { sm: 'block' } }}>
                {
                    matches ? <Image src="/logo.png" width={160} height={80} alt="logo "  ></Image>  
                   : <Image src="/logo-text.png" width={700} height={106.05} alt="logo "  ></Image>             
                              
                    // <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                    //   Công ty cổ phần thí nghiệm điện Việt Nam
                    //   VN ETC
                    // </Typography>
                }
                </Link>            
            </Grid>
            <Grid item xs={7}>
                <Typography backgroundColor="yellow">1</Typography>
                <Typography backgroundColor="green">2</Typography>
                <Typography backgroundColor="red">3</Typography>
            </Grid>
        </Grid>
        )
}
