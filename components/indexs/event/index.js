import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { NewsData } from '../../../data/newsdata';
import BoxNews from '../../news/boxnews';

const Event = () => {

    return (
        <Grid container spacing={2} direction="row" justifyContent='center' alignItems='center'  >
            {/* {NewsData.map(el => {
                return el.subcontent.map(e => (
                    <Grid item md={12} lg={3}>
                        <BoxNews group={NewsData.group} time={e.time} subid={e.subid} title={e.title} imagePath={e.imagePath} Description={e.Description} />
                    </Grid>
                )
                )
            })
            } */}
             {NewsData.map(e => {
                return(
                <Grid item md={12} lg={3}>
                    <BoxNews group={e.group} time={e.time} subid={e.subid} title={e.title} imagePath={e.imagePath} Description={e.Description} />
                </Grid>
                )
            })
            }
            {/* <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                văn hoá doanh nghiệp việt nam
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Cùng với việc phấn đấu hoàn thành tốt nhiệm vụ sản xuất kinh doanh
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card> */}
            {/* <Grid item md={12} lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                văn hoá doanh nghiệp việt nam
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Cùng với việc phấn đấu hoàn thành tốt nhiệm vụ sản xuất kinh doanh
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item md={12} lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                văn hoá doanh nghiệp việt nam
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Cùng với việc phấn đấu hoàn thành tốt nhiệm vụ sản xuất kinh doanh
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item md={12} lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                văn hoá doanh nghiệp việt nam
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Cùng với việc phấn đấu hoàn thành tốt nhiệm vụ sản xuất kinh doanh
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid> */}
        </Grid>


    )
}

export default Event