import { useState } from "react";
import HomeSlide from "../../components/homepagecomponents/homeSlideComponent"
import CardProduct from "../../components/homepagecomponents/carteProduit"
import ParallaxPub from "./parallaxPub";
import CarouselImage from "./carouselImage";


function HomePage() {
    return (
    <>
        <HomeSlide />
        <CardProduct />
        <ParallaxPub/>
        <CarouselImage/>
    </>
    );
}

export default HomePage;