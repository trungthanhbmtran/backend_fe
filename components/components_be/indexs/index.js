import { Divider, Stack } from "@mui/material"
import BoxInfo from "./boxinfo"
import SlideImages from "./SlideImages"
import { slideData } from "../../data/slidedata"

const Indexs = () => {
    return (
        <>
            <SlideImages />
            <Stack
                direction='column'
                divider={<Divider />}
                spacing={2}>
                {slideData.map(e => <BoxInfo key={e.id} tittle={e.tittle} path={e.path} component={e.component} />)}
            </Stack>
        </>

    )
}

export default Indexs