import { Card, Box, CardContent, CardHeader, CardMedia, Typography, Grid } from "@mui/material"
import { Container } from "@mui/system"
import useModal from '../../../hooks/useModal'

const Commit = () => {
    const [open,setOpen] = useModal()
    return (
        <Grid container spacing={2} justifyContent='center' alignItems='center'>
            <Grid item md={12} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    sx={{textAlign : 'center' , color :'green'}}
                 title="Sứ Mệnh"
                 />
                <CardMedia
                    component="img"
                    height="194"
                    image="/su-me-nh-1.jpg"
                    alt="Paella dish" />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Mang tới cho khách hàng những sản phẩm có chất lượng và dịch vụ tốt nhất với giá cả hợp lý nhất.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Giảm tổn thất điện năng cho lưới điện.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Đóng góp cho sự phát triển bền vững của ngành Điện và xã hội.
                    </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item md={12} lg={3}>
            <Card onClick={() => alert("thanahs")} sx={{ maxWidth: 345 }}>
                <CardHeader
                    sx={{textAlign : 'center' , color :'green'}}
                 title="Tầm nhìn"
                 />
                <CardMedia
                    component="img"
                    height="194"
                    image="/su-me-nh-1.jpg"
                    alt="Paella dish" />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Mang tới cho khách hàng những sản phẩm có chất lượng và dịch vụ tốt nhất với giá cả hợp lý nhất.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Giảm tổn thất điện năng cho lưới điện.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Đóng góp cho sự phát triển bền vững của ngành Điện và xã hội.
                    </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item md={12} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    sx={{textAlign : 'center' , color :'green'}}
                 title="Giá trị cốt lõi"
                 />
                <CardMedia
                    component="img"
                    height="194"
                    image="/su-me-nh-1.jpg"
                    alt="Paella dish" />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Mang tới cho khách hàng những sản phẩm có chất lượng và dịch vụ tốt nhất với giá cả hợp lý nhất.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Giảm tổn thất điện năng cho lưới điện.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Đóng góp cho sự phát triển bền vững của ngành Điện và xã hội.
                    </Typography>
                </CardContent>
            </Card>
            </Grid>
        </Grid>

    )
}

export default Commit