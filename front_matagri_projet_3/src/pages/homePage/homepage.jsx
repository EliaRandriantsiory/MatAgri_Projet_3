import { useState } from "react";
import HomeSlide from "../../components/homepagecomponents/homeSlideComponent"
import CardProduct from "../../components/homepagecomponents/carteProduit"

function HomePage() {
    return (
    <>
        <HomeSlide />
        <CardProduct />
    </>
    );
}

export default HomePage;