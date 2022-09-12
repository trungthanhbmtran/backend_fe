import { slideImageData } from '../../../data/slideImageData'
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'


const SlideImages = () => {
    return (
        <Carousel
            autoPlay={true}
            swipe={true}
            indicators={true}
            cycleNavigation={true}
            fullHeightHover={false}
            animation="fade"
            height={500}
            interval={3000}
        >
            {
                slideImageData.map((item, i) => <Image key={i} src={item.imgPath} alt="index" layout='fill' />)
            }
        </Carousel>

    )
}
export default SlideImages