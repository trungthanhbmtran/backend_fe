
import { Box } from "@mui/material";
import New from "../news";

const DataNewsETC = [
    { id: 1, title: 'Văn hoá doanh nghiệp việt nam', imagePath: "/static/images/cards/contemplative-reptile.jp", Description: 'Cùng với việc phấn đấu hoàn thành tốt nhiệm vụ sản xuất kinh doanh' ,time : '12/06/2021'},
    { id: 2, title: 'Sử dụng thiết bị ra sao', imagePath: "/static/images/cards/contemplative-reptile.jp", Description: 'Nội dung gì đây ta',time : '22/06/2021' },
    { id: 3, title: 'Triển khai dự án', imagePath: "/static/images/cards/contemplative-reptile.jp", Description: 'Công việc phải làm',time : '11/06/2021' },
    { id: 4, title: 'Thành đang test', imagePath: "/static/images/cards/contemplative-reptile.jp", Description: 'Công việc phải làm' ,time : '31/06/2021'},

]

const ContentPage = () =>{
    return(
        <Box>
                <New data={DataNewsETC}/>
        </Box>
    )
}

export default ContentPage