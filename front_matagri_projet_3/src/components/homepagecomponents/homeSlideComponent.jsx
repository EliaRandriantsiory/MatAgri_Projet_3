import slide1 from '../../pages/assets/images/caroussel/Carousel2.png';
import slide2 from '../../pages/assets/images/caroussel/Carousel4.png';
import slide3 from '../../pages/assets/images/caroussel/Carousel5.png';
import { Carousel } from 'react-bootstrap';

function HomeSlide({}) {
  // console.log(homeSlideComponent.imageName)
  // console.log(homeSlideComponent.title)
  // console.log(homeSlideComponent.slogan)
  // console.log(homeSlideComponent.description)
    return (
      <Carousel>
        <Carousel.Item>
          <img src={slide3} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide2} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide1} alt="" />
        </Carousel.Item>
      </Carousel>
    );
  }
export default HomeSlide;
