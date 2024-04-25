import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slide1 from '../assets/images/caroussel/Carousel1.png';
import Slide2 from '../assets/images/caroussel/Carousel2.png';
import Slide3 from '../assets/images/caroussel/Carousel3.png';

function CarouselImage() {
  return ( 
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={Slide2} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Slide3} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Slide1} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselImage;
