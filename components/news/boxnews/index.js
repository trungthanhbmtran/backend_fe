import { CardHeader , CardActionArea, CardContent, CardMedia,  Typography } from '@mui/material'
import Link from '../../../lib/Link'

const BoxNews = ({time,title,subid,imagePath,Description,group}) =>{
    if(subid){
        return(
            <Link href={`./post/${group}/${subid}`} variant="body2" underline="none">
                <CardActionArea >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={imagePath}
                                    alt="green iguana"
                                />
                                <CardHeader
                                    subheader={time}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {Description}
                                    </Typography>
                                </CardContent>
                            
                </CardActionArea>
            </Link>
        )
    }
    return(
        <Link href={`./post/${group}/1`} variant="body2" underline="none">
            <CardActionArea >
                            <CardMedia
                                component="img"
                                height="140"
                                image={imagePath}
                                alt="green iguana"
                            />
                            <CardHeader
                                subheader={time}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {Description}
                                </Typography>
                            </CardContent>
                        
            </CardActionArea>
        </Link>
    )
   
}

export default BoxNews