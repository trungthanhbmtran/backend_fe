import { Typography,Paper } from "@mui/material"
import Layout from "../components/Layout"
import BasicModal from "../components/modal"

const Contact =()=>{
    return(
        <Layout>
            <Paper sx={{backgroundColor :'red'}}>
            <Typography>Địa chỉ liên hệ </Typography>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.0547367630377!2d108.06016398891441!3d12.699127842494986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171f7c2b87a97cf%3A0xe9ea4bdd35f34d68!2zMjEzIEzDqiBRdcO9IMSQw7RuLCBUw6JuIEFuLCBUaMOgbmggcGjhu5EgQnXDtG4gTWEgVGh14buZdCwgxJDhuq9rIEzhuq9rLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1659972859832!5m2!1svi!2s" width="100%" height="300" ></iframe>
            </Paper>
            
        </Layout>
    )
}

export default Contact