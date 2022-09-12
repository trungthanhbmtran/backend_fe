import { Typography, Grid, Stack } from "@mui/material"
import Image from "next/image"
import Layout from "../../Layout"

const Maybienthe = () => {
    return (
        <Layout>
            <Stack spacing={2}>
                <Typography variant='h6'>Chiều ngày 22/7/2022, Bộ Thông tin và Truyền thông đã chủ trì tổ chức Lễ phát động cuộc thi “Tìm kiếm giải pháp Chuyển đổi số Quốc gia - Viet Solutions” năm 2022. Đây là năm thứ 3, cuộc thi Tìm kiếm Giải pháp Chuyển đổi số Quốc gia - Viet Solutions được tổ chức. Mỗi năm, cuộc thi đều có những thay đổi mới để tạo ra nhiều hơn các không gian sáng tạo.</Typography>
                <Image src="/images/News/IT/phatdongcuocthi/20220722-ta10.jpg" height={100} width={200} layout="responsive" />
                <Typography variant='subbody1'>Viet Solutions là cuộc thi do Bộ Thông tin và Truyền thông (TT&TT) chủ trì, Cục Tin học hóa và Tập đoàn Công nghiệp Viễn thông Quân đội Viettel đồng tổ chức, từ năm 2022 có sự tham gia đồng hành của Công ty Galaxy Digital, cùng sự tham gia bảo trợ truyền thông của Đài Truyền hình Việt Nam (VTV), Đài Tiếng nói Việt Nam (VOV), Báo VietNamNet, Báo Vnexpress và Tạp chí TT&TT</Typography>
                <Typography variant='subbody1'>Cuộc thi cũng nhận được sự hưởng ứng đồng hành của rất nhiều cơ sở đào tạo đại học, gồm: Đại học Quốc gia Hà Nội, Đại học Quốc gia Thành phố Hồ Chí Minh, Học viện Công nghệ Bưu chính, Viễn thông, Học viện Nông nghiệp, các trường đại học: Bách khoa Hà Nội, Ngoại thương, Bách Khoa Đà Nẵng, Duy Tân Đà Nẵng và Bách Khoa Thành phố Hồ Chí Minh.</Typography>
                <Typography variant='subbody1'>Phát biểu tại buổi lễ, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết: Cuộc thi Viet Solutions đã qua 03 lần tổ chức, đã phát hiện, tìm kiếm ra các doanh nghiệp công nghệ số cùng với những lời giải hay, giải pháp công nghệ số đột phá, góp phần giải quyết các vấn đề, các nỗi đau của xã hội.</Typography>
                <Typography variant='subbody1'>Năm nay, cuộc thi Viet Solutions năm 2022 có một số thay đổi cơ bản: (1) Bộ TT&TT sẽ cùng các cơ quan, tổ chức, cá nhân đánh giá hiệu quả và lựa chọn các giải pháp công nghệ xuất sắc; (2) Các cơ quan, tổ chức, cá nhân sẽ là người đặt đầu bài thông thái trước, sau đó mới tìm kiếm giải pháp công nghệ phù hợp sử dụng; (3) Cuộc thi sẽ vinh danh cả vai trò của các cơ quan, tổ chức, cá nhân đặt ra bài toán hay cho các doanh nghiệp công nghệ sáng tạo giải pháp.</Typography>
                <Typography variant='subbody1'>“Nếu như trước đây, doanh nghiệp mất nhiều thời gian, công sức để nghiên cứu thị trường, tìm hiểu đối tác, tìm hiểu vấn đề, tìm kiếm người dùng. Thì nay, thông qua cuộc thi Viet Solutions, các bài toán và khách hàng tiềm năng đã được mang đến gần hơn với các doanh nghiệp công nghệ số. Bộ TT&TT mong muốn các doanh nghiệp công nghệ số hay coi đây là một cơ hội tốt, tích cực tham gia xây dựng các giải pháp công nghệ để giải quyết nỗi đau của xã hội, từ đó tìm kiếm cơ hội cho doanh nghiệp mình.” -Thứ trưởng Nguyễn Huy Dũng chia sẻ thêm.</Typography>
            </Stack>
        </Layout>
    )
}

export default Maybienthe