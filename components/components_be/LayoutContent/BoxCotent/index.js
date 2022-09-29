import { Box, Divider, Grid, Typography } from "@mui/material"
import { Container, Stack } from "@mui/system"
import Image from "next/image"
import Link from "../../../lib/Link"

const BoxContent = ({title,content,group}) =>{
    console.log('content',content[content.length-1])
    return(
        <Container maxWidth="lg">
            <Typography variant="h6" align="center">Tin mới nhất :  {title}</Typography>
            <Divider/>
                <Stack
                spacing={3}
                >
                    {/* {content?.reduce((t, v) => 
                    content[content.length]    ? 
                    [...t, (
                        <Typography key={v.subid}>{v.title}</Typography>
                    )] : t
                    , [])} */}
                        <Link href={`./${group}/${content.length-1}`} variant="body2" underline="none">                        
                        <Grid container spacing="2">
                            <Grid item xs={2}>
                                <Image src={content[content.length-1].imagePath} width="100" height="100"/>
                            </Grid>
                            <Grid item xs>
                                <Typography key={content[content.length-1].subid}>{content[content.length-1].title}</Typography>
                            </Grid>
                        </Grid>
                    </Link>
                </Stack>
        </Container>
    )
}

export default BoxContent