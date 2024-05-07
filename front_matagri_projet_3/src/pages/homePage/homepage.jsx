import axios from "axios";
import { useEffect, useState } from "react";
import HomeSlide from "../../components/homepagecomponents/homeSlideComponent";
import CardProduct from "../assets/carteProduit";
import ParallaxPub from "./parallaxPub";

function HomePage() {
    const [listMateriel, setListMateriel] = useState([]);
    useEffect(() => {
        axios
        .get(
          "http://localhost:8082/api/materiels/listMateriel"
        )
        .then((response) => {
        //   console.log(response.data)
          setListMateriel(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      
    },[])
    return (
    <>
        <HomeSlide />
        <CardProduct listmatHomePage={listMateriel}/>
        <ParallaxPub/>
        
    </>
    );
}

export default HomePage;