import { Typography, Grid, Stack } from "@mui/material"
import Image from "next/image"
import Layout from "../../Layout"

const Maybienthe2 = () => {
    return (
    <Layout>
        <Stack spacing={3}>
            <Typography variant='h6'>Về việc xuất hiện trang web giả mạo thương hiệu EVN</Typography>
            <Image src="/images/news/etc/trangwebgiamao.jpg" layout='fixed' width={500} height={500} alt="1" ></Image>
            <Typography variant='subbody1'>Tập đoàn Điện lực Việt Nam (EVN) xin khẳng định trang web tại địa chỉ https://app.chuanqd.com hoàn toàn không phải của EVN cũng như của bất cứ đơn vị thành viên nào của EVN. Trang web này đã sử dụng một số nội dung, hình ảnh, logo có thể gây hiểu nhầm là ấn phẩm thông tin thuộc Tập đoàn Điện lực Việt Nam, có khả năng ảnh hưởng đến quyền lợi của khách hàng khi sử dụng các thông tin tại trang web này.
            </Typography>
            <Typography variant='subbody1'>Hiện nay, Tập đoàn Điện lực Việt Nam (EVN) chỉ sở hữu các trang web tại địa chỉ: http://www.evn.com.vn và http://tietkiemnangluong.vn. Do vậy, EVN kính đề nghị các khách hàng sử dụng điện khi có yêu cầu bất kỳ dịch vụ nào của EVN chỉ tra cứu thông tin tại các địa chỉ: http://www.evn.com.vn và http://tietkiemnangluong.vn hoặc liên hệ các Trung tâm Chăm sóc khách hàng thuộc các Tổng công ty Điện lực để được hỗ trợ.
            </Typography>
            <Typography variant='subbody1'>Tập đoàn Điện lực Việt Nam xin được thông tin tới các Quý khách hàng sử dụng điện được biết về trang web giả mạo thương hiệu EVN nêu trên. Qua đây, Tập đoàn Điện lực Việt Nam cũng xin trân trọng gửi lời cảm ơn chân thành tới tất cả các khách hàng sử dụng điện, các cơ quan thông tấn, báo chí đã luôn đồng hành cùng EVN. Tập đoàn Điện lực Việt Nam rất mong tiếp tục nhận được sự ủng hộ và ý kiến góp ý của khách hàng sử dụng điện về các hoạt động sản xuất kinh doanh để Tập đoàn tiếp tục hoàn thiện hơn nữa, đáp ứng được yêu cầu ngày càng cao của xã hội trong công tác dịch vụ khách hàng./.     
            </Typography>
        </Stack>
    </Layout>
    )
}

export default Maybienthe2