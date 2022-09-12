import { Typography, Grid, Stack } from "@mui/material"
import Image from "next/image"
import Layout from "../../Layout"

const Maybienthe = () => {
    return (
        <Layout>
            <Stack spacing={2}>
                <Typography variant='subtitle1'>PC Đắk Lắk: Bảo đảm việc cung cấp điện ngày một tốt hơn</Typography>
                <Typography variant='h6'>Với mục tiêu cung cấp điện ngày càng ổn định cho khách hàng, Công ty Điện lực Đắk Lắk (Tổng công ty Điện lực miền Trung) thành lập Đội Sửa chữa nóng lưới điện từ ngày 12/4/2016.</Typography>
                <Image src="/images/news/etc/Daclac01032017.jpg" layout='fixed' width={500} height={200} alt="1"></Image>
                <Typography variant='subbody1'>Đây cũng là bước đi nhằm thực hiện chủ trương đổi mới công nghệ trong điều hành sản xuất kinh doanh, nâng cao độ tin cậy cung cấp điện cho khách hàng, đồng thời đáp ứng được các yêu cầu về chỉ số độ tin cậy của cấp trên giao. Đội có chức năng thực hiện công tác sửa chữa, thay thế, đấu nối các thiết bị trên lưới đang mang điện ở cấp điện áp 22 kV, thực hiện công tác vệ sinh cách điện bằng nước áp lực cao trên lưới đang mang điện 22 kV, 35 kV tại các đơn vị trực thuộc và các đơn vị ngoài theo yêu cầu.
                </Typography>
                <Typography variant='subbody1'>Qua tìm hiểu cho thấy, trước đây đối với việc vệ sinh cách điện đường dây trung thế 22 kV, 35 kV đòi hỏi phải cắt điện nhiều ngày để thực hiện trên từng quả sứ, từng cột điện thì nay, với công nghệ vệ sinh bằng nước cách điện áp lực cao, công tác này chỉ cần thực hiện trong vài giờ mà không cần phải cắt điện, nhưng vẫn bảo đảm hệ thống lưới điện an toàn, khống chế các yếu tố gây sự cố mất điện có thể xảy ra.
                </Typography>
                <Typography variant='subbody1'>Ngay sau khi thành lập, Đội đã thực hiện vệ sinh cách điện bằng nước áp lực cao theo đề nghị của các điện lực trực thuộc. Kết quả, trong 2 tháng cuối mùa khô năm 2016, Đội đã thực hiện vệ sinh các bộ phận cách điện của gần 800 vị trí trụ và 38 TBA phụ tải.
                </Typography>
                <Typography variant='subbody1'>Trao đổi với chúng tôi, ông Tạ Minh, Phó Giám đốc Công ty Điện lực Đắk Lắk cho biết: Sau khi được Tổng công ty Điện lực miền Trung đầu tư phương tiện sửa chữa điện nóng và tổ chức huấn luyện, sát hạch đạt yêu cầu, ngày 6/12/2016, Đội Sửa chữa nóng lưới điện của Công ty Điện lực Đắk Lắk chính thức thực hiện công tác đầu tiên trên lưới điện.
                </Typography>
            </Stack>
        </Layout>
    )
}

export default Maybienthe