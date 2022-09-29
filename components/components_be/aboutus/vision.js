import { Box,Grid,Typography } from "@mui/material"

const Vision = () =>{
    return(
<Box
    sx={{
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' }
    }}
    >
         <Grid        
                    container
                    spacing={{ xs: 2, md: 3 }}
                    justifyContent="center"
                    sx={{ margin: `20px 4px 10px 4px` }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
        >
            <Grid item  md={12} lg={4} >
                <Typography variant="h6" component="div" >TẦM NHÌN – SỨ MỆNH – GIÁ TRỊ CỐT LÕI</Typography>
            </Grid>
            <Grid item  md={12} lg={4} >
                <Typography variant="subtitle2" component="div" >A.TẦM NHÌN</Typography>
                <Typography variant="body1" component="div" >VN.ETC nổ lực phát triển bền vững và hướng đến trở thành một doanh nghiệp lớn phát triển mạnh mẽ trên 4 trụ cột chiến lược là Sản xuất thiết bị điện; Kiểm định – Hiệu chuẩn – Thử nghiệm thiết bị điện; Công nghệ thông tin; An toàn thông tin trên môi trường mạng.</Typography>
                <Typography variant="body1" component="div" >Không ngừng sáng tạo, nâng cao uy tín chất lượng của mình và đảm bảo sự hài lòng và an toàn của Khách hàng và đối tác.</Typography>
                <Typography variant="body1" component="div" >Mỗi thành viên của VN.ETC có cơ hội và điều kiện để phát triển năng lực, được tiếp cận công nghệ trình độ để hoàn thiện bản thân và nâng cao đời sống gia đình góp phần cho cuộc sống tốt đẹp hơn.</Typography>

            </Grid>
            <Grid item  md={12} lg={4} >
                <Typography variant="subtitle2" component="div" >B.	SỨ MỆNH</Typography>
                <Typography variant="body1" component="div" >Đảm bảo tính an toàn và chất lượng trong công tác Kiểm định – Hiệu chuẩn – Thử nghiệm thiết bị điện cho các công trình Điện công ngiệp và dân dụng với thiết bị và công nghệ hiện đại, đạt tiến độ, đánh giá đúng chất lượng của thiết bị, tạo uy tín Niềm tin chất lượng và sự an toàn với Khách hàng và đối tác. Thực hiện chế độ đãi ngộ hợp lý về vật chất và tinh thần đối với cán bộ công nhân viên, chia sẻ một phần trách nhiệm xã hội đối với cộng đồng.</Typography>
            </Grid>
            <Grid item  md={12} lg={4} >
                <Typography variant="subtitle2" component="div" >C.	GIÁ TRỊ CỐT LÕI</Typography>
                <Typography variant="body1" component="div" >Chất lượng: VN.ETC luôn là đơn vị đồng hành lâu dài đáng tin cậy của Khách Hàng trên con đường phát triển. Cam kết đáp ứng tối đa mọi yêu cầu của Khách Hàng, đảm bảo các sản phẩm và dịch vụ cung cấp. Đem lại lợi ích tốt nhất, vì sự phồn vinh của Khách Hàng, của VN.ETC và của Việt Nam” với sự trung thực và tận tâm trên tinh thần chất lượng – an toàn, đảm bảo tiến độ; tạo niềm tin cho Khách hàng, đối tác và cổ đông. Không ngừng đầu tư thiết bị hiện đại, luôn đi đầu trong việc áp dụng khoa học, công nghệ tiên tiến vào quản lý doanh nghiệp. VN.ETC khẳng định là một nhân tố phát triển để tăng tính cạnh tranh và là một yếu tố của văn hóa doanh nghiệp.</Typography>
                <Typography variant="body1" component="div" >Chuyên nghiệp: Xây dựng đội ngũ Kỹ thuật, cán bộ công nhân viên có phong cách làm việc chuyên nghiệp, trung thực, sáng tạo, giàu nhiệt huyết - giỏi chuyên môn.</Typography>
                <Typography variant="body1" component="div" >Đoàn kết: xây dựng tinh thần đoàn kết, hợp tác lành mạnh, sẵn sàng chia sẻ giữa các đồng nghiệp, giữa lãnh đạo và nhân viên, giữa nhân viên và các đối tác.</Typography>
                <Typography variant="body1" component="div" >Lợi ích của Khách hàng: Mọi hoạt động đều hướng đến Chất lượng – An toàn và sự hài lòng của khách hàng. Chính sự hài lòng của khách hàng và đối tác là sự thành công của VN.ETC. </Typography>
                <Typography variant="body1" component="div" >Phát triển bền vững: Đáp ứng nhanh chóng và hiệu quả mọi yêu cầu của khách hàng. Đảm bảo sự hoạt động liên tục đối với các dịch vụ mà Công ty cung cấp. Nhiệt tình, chu đáo với thái độ nhanh nhẹn, hòa nhã. Đảm bảo cung cấp dịch vụ với giá cả hợp lý và sức cạnh tranh cao. Luôn quan tâm đến chính sách đào tạo nhân viên để đảm bảo tính chuyên môn cao.
</Typography>

            </Grid>
        </Grid>
    </Box>
    )
}

export default Vision
