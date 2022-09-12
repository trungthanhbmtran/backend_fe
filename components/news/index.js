import LayoutPage from "../layoutpage"
import BoxNews from "./boxnews"
import ListNews from "./listnews"
import { Box, Grid } from "@mui/material"

// const DataNewsETC = [
//     { id: 1, title: 'Văn hoá doanh nghiệp việt nam', imagePath: "/static/images/cards/contemplative-reptile.jp", Description: 'Cùng với việc phấn đấu hoàn thành tốt nhiệm vụ sản xuất kinh doanh' ,time : '12/06/2021'},
//     { id: 2, title: 'Sử dụng thiết bị ra sao', imagePath: "/static/images/cards/contemplative-reptile.jp", Description: 'Nội dung gì đây ta',time : '22/06/2021' },
//     { id: 3, title: 'Triển khai dự án', imagePath: "/static/images/cards/contemplative-reptile.jp", Description: 'Công việc phải làm',time : '11/06/2021' },
//     { id: 4, title: 'Thành đang test', imagePath: "/static/images/cards/contemplative-reptile.jp", Description: 'Công việc phải làm' ,time : '31/06/2021'},

// ]

const New = ({data}) => {
    // console.log('data in new',data)
    return (
        <Box
            sx={{
                p: { xs: 4, md: 10 },
                pt: 12,
                pb: 12,
                fontSize: { xs: '12px', md: '14px' }
            }}
        >
            <Grid container spacing={2}>
                {/* <Grid item md={12} lg={4}>
                    <BoxNews key={data.id}  time={data.time} title={data.title} imagePath={data.imagePath} Description={data.Description} />
                </Grid> */}
                {
                    data.subcontent.map(e => (
                        <Grid key={e.id} item md={12} lg={4}>
                            <BoxNews  group={data.group} time={e.time} subid={e.subid} title={e.title} imagePath={e.imagePath} Description={e.Description} />
                        </Grid>
                    ))
                }
            </Grid>

            <Grid container spacing={2}>
            {/* <Grid item md={12} lg={12}>
                        <ListNews key={data.id} time={data.time}  title={data.title} />
                    </Grid> */}
                {
                    data.subcontent.map(e => (
                        <Grid key={e.id} item md={12} lg={12}>
                                  <ListNews  group={data.group} time={e.time} subid={e.subid}  title={e.title}  />
                        </Grid>
                    ))
                }
            </Grid>


        </Box>
    )
}

export default New