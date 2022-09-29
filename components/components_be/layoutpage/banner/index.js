
import {  Typography } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
} from "../../styles/banner";

const Banner = ({path,title,description}) =>{
 return(
    <BannerContainer >
    <BannerImage src={path} />
    <BannerContent>
      <Typography variant="h6">{title} </Typography>
      {/* <BannerTitle variant="h6">
        TN điện Và CNTT
      </BannerTitle> */}

      <BannerDescription variant="subtitle">
         {description}
      </BannerDescription>

      {/* <BannerShopButton color="primary">Xem thêm</BannerShopButton> */}
    </BannerContent>
  </BannerContainer>
);
}

export default Banner
