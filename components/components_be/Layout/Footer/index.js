import {
  Grid,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../../lib/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FooterTitle } from "../../styles/footer";
import Link from "../../../lib/Link";

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.primary,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <Typography variant="caption2">
          CÔNG TY CỔ PHẦN THÍ NGHIỆM CƠ ĐIỆN VIỆT NAM
          <br></br>
          Tên viết tắt: VN.ETC 
          <br></br>
          1.	Trụ sở chính: Số 22 Trần Hữu Dực – Tổ DP 5 – P. Tân Lợi – Tp Buôn Ma Thuột – tỉnh Đăk Lăk – Việt Nam
          <br></br>
          Tel/Fax: +84-262-3 97.71.71    Hotline: +84-968.17.47.47/+84-905.174.001
          <br></br>
          2.	Văn phòng đại diện tại Miền Trung: Số 08 Phước Hòa 5 – P. Khuê Trung – Q. Cẩm Lệ - TP Đà Nẵng.
          <br></br>
          ĐT: 0236.3.79.3979;   Fax: 0236.3.79.3979
          <br></br>
          Email: vietnam.etc.ltd@gmail.com
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Thông tin</FooterTitle>
          <List>
            <Link href="/about" color="secondary" underline="none">
              <ListItemText>
                  <Typography lineHeight={2} variant="caption2">
                    Giới thiệu
                  </Typography>
              </ListItemText>
            </Link>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Theo dõi đơn hàng
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Cam kết &amp; chính sách
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Điều kiện &amp; Năng lực
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Đăng nhập
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Giỏ sản phẩm
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Tài khoản của tôi
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Yêu thích
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">Thong tin them</FooterTitle>
        </Grid>
      </Grid>
    </Box>
  );
}
