import { Grid, Paper, Stack, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { NewsData } from "../../data/newsdata"
import Layout from "../Layout"
import BoxContent from "./BoxCotent"


const LayoutContent = ({children}) =>{
    return(
        <Layout>
            <Container maxWidth="false" sx={{mt :10}}>
                <Grid container  spacing={5}>
                    <Grid item xs={8}>{children}</Grid>
                    <Grid item xs>
                    <Paper>
                        <Stack
                        spacing={5}
                        >
                            {NewsData.map(e=> <BoxContent key={e.id} title={e.title} group={e.group} content={e.subcontent}/>)}
                        </Stack>
                    </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default LayoutContent