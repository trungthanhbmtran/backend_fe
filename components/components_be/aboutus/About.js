import { Divider, Grid, Box, Typography } from "@mui/material"
import Image from "next/image"

const About = () => {
    return (
        <Box
            sx={{
                p: { xs: 4, md: 10 },
                pt: 12,
                pb: 12,
                fontSize: { xs: '12px', md: '14px' }
            }}
        >
            <Grid container direction='row' spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" textAlign='center'>CÔNG TY CỔ PHẦN THÍ NGHIỆM CƠ ĐIỆN VIỆT NAM</Typography>
                    <Divider variant="middle" />
                    <Typography variant="body1">1.	Trụ sở chính: Số 22 Trần Hữu Dực – Tổ DP 5 – P. Tân Lợi – Tp Buôn Ma Thuột – tỉnh Đăk Lăk – Việt Nam.
                        <br></br>Tel/Fax: +84-262-3 97.71.71
                        <br></br>Hotline: +84-968.17.47.47/+84-905.174.001
                        <br></br>Website: vietnametc.com
                        <br></br>Email: vietnam.etc.ltd@gmail.com
                    </Typography>
                    <Typography variant="body1">2.	Văn phòng đại diện tại Miền Trung: Số 08 Phước Hòa 5 – P. Khuê Trung – Q. Cẩm Lệ - TP Đà Nẵng.
                        <br></br>ĐT: 0236.3.79.3979;
                        <br></br>Fax: 0236.3.79.3979
                        <br></br>Website: vietnametc.com
                        <br></br>Email: vietnam.etc.ltd@gmail.com
                    </Typography>
                    <Typography variant="body1">3.	Văn phòng đại diện tại Quảng Ngãi : 303 Phan Đình Phùng, Phường Chánh Lộ, TP. Quảng Ngãi, Tỉnh Quảng Ngãi, Việt Nam.
                        <br></br> Nguyễn Vân Hải - ĐT: 0942503822;
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} textAlign="center">
                    <Image src='/images/banner/about/CT.jpg' alt="Image about" width={360} height={360} layout="fixed" />
                </Grid>
            </Grid>
        </Box>
    )
}

export default About