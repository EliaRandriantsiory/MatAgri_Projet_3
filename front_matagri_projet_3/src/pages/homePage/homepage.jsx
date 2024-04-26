import { useEffect, useState } from "react";
import HomeSlide from "../../components/homepagecomponents/homeSlideComponent";
import CardProduct from "../../components/homepagecomponents/carteProduit";
import axios from "axios";
import ProductBox from "../../components/Produitcomponents/cartesProduitCompnent";

import CardProduct from "../assets/carteProduit";
import ParallaxPub from "./parallaxPub";

function HomePage() {
  const [listMateriel, setListMateriel] = useState([]);
  useEffect(() => {
    // INITIALISATION DATA MATERIEL
    axios
      .get("http://localhost:8082/api/materiels/listMateriel")
      .then((response) => {
        setListMateriel(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <HomeSlide />
      <CardProduct />
      <ParallaxPub />
    </>
  );
}

export default HomePage;
