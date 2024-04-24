import React from "react";
import CardProduct from "../../components/homepagecomponents/carteProduit";
import CarouselImage from "./carouselImage";
import ParallaxPub from "./parallaxPub";


function HomePage() {
    return (
    <>
        
        <CarouselImage />
        <CardProduct />
        <ParallaxPub />
    </>
    );
}

export default HomePage;