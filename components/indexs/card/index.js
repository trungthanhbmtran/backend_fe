
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
// import CardComponent from '../../ContainerComponents/card';
import Carousel from 'react-material-ui-carousel';


const items = [
    {
        Name: "Điện mặt trời TNHH Gia Thành",
        Caption: "Địa chỉ tại cư mgar",
        Image: "https://source.unsplash.com/featured/?macbook",
        contentPosition: "left",
        Items: [
            {
                Name: "Macbook Pro",
                Image: "https://source.unsplash.com/featured/?macbook"
            },
            {
                Name: "iPhone",
                Image: "https://source.unsplash.com/featured/?iphone"
            },
            {
                Name: "iPhone",
                Image: "https://source.unsplash.com/featured/?iphone"
            }
        ]
    },
    {
        Name: "Hệ thống NLMT của Công ty CP Đầu tư và Phát triển Năng Lượng Cao Nguyên ",
        Caption: "huyện Buôn Đôn – tỉnh Đăk Lăk với công suất 5 MBW",
        contentPosition: "middle",
        Items: [
            {
                Name: "Washing Machine WX9102",
                Image: "https://source.unsplash.com/featured/?washingmachine"
            },
            {
                Name: "Learus Vacuum Cleaner",
                Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
            },
            {
                Name: "iPhone",
                Image: "https://source.unsplash.com/featured/?iphone"
            }
        ]
    },
    {
        Name: "Thí nghiệm định kỳ nhà máy thủy điện Sereepok 4A – của Công ty CP Thủy điện Buôn Đôn ",
        Caption: "huyện Buôn đôn -tỉnh Đăk Lăk",
        contentPosition: "right",
        Items: [
            {
                Name: "Living Room Lamp",
                Image: "https://source.unsplash.com/featured/?lamp"
            },
            {
                Name: "Floral Vase",
                Image: "https://source.unsplash.com/featured/?vase"
            },
            {
                Name: "iPhone",
                Image: "https://source.unsplash.com/featured/?iphone"
            }
        ]
    }
]

const ActionAreaCard = () => {
    return (
        <div style={{ marginTop: "50px", color: "#494949" }}>
            <Carousel
                className="Example"
                next={(now, previous) => console.log(`Next User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                prev={(now, previous) => console.log(`Prev User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                
                // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
                // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
                // indicatorContainerProps={{style: {margin: "20px"}}}
                indicators={false}
                swipe={true}
                autoPlay={false}
                navButtonsAlwaysInvisible
            >
                {
                    items.map((item, index) => {
                        return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                    })
                }
            </Carousel>
            <br/>
        </div>
    );
}

const Banner = (props) => {
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems =   props.length ? props.length : 2;
    const mediaLength = totalItems ;
    let items = [];


    const content = (
        <Grid item xs={4} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>
                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>
                <Button variant="outlined" className="ViewButton">
                    Xem chi tiết
                </Button>
            </CardContent>
            {/* <CardComponent tittle={props.item.Name}></CardComponent> */}
        </Grid>
    )

    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];
        const media = (
            <Grid item xs={4} key={item.Name}>
                <CardMedia
                    className="Media"
                    sx={{height:'300px'}}
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className="MediaCaption" color='Yellow'>
                        {item.Name}
                    </Typography>
                </CardMedia>
                {/* <CardComponent tittle={props.item.Name} ></CardComponent> */}
            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}


export default ActionAreaCard