import { useState } from "react";
import HomeSlide from "../../components/homepagecomponents/homeSlideComponent"
import CardProduct from "../assets/carteProduit"
import ParallaxPub from "./parallaxPub";

function HomePage() {
    return (
    <>
        <HomeSlide />
        <CardProduct />
        <ParallaxPub/>
    </>
    );
}

export default HomePage;