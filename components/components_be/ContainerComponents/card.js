import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

const CardComponent = ({pathImg,tittle,Description}) =>{
    return(
    <Card sx={{ maxWidth: 345 }} onClick={() => alert('hiện lên cái gì đây')}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pathImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tittle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Description}
          </Typography>
          {/* <Button> Xem chi tiết</Button> */}
        </CardContent>
      
      </CardActionArea>
    </Card>
    )
}

export default CardComponent