import * as React from 'react';
import { Grid } from '@mui/material';
import { NewsData } from '../../../data/newsdata';
import BoxNews from '../../news/boxnews';

const Event = () => {
    // console.log('NewsData',NewsData)
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
                // console.log('e',e.subcontent.at(0))
                // {e.subcontent.at(0)}
                return(
                <Grid item md={12} lg={3} sx={{ minHeight : 600 }}>
                    <BoxNews group={e.group} time={e.subcontent.at(0).time} subid={e.subcontent.at(0).subid} title={e.subcontent.at(0).title} imagePath={e.subcontent.at(0).imagePath} Description={e.subcontent.at(0).Description} />
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