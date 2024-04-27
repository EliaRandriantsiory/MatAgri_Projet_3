import { useEffect, useState } from "react";
import HomeSlide from "../../components/homepagecomponents/homeSlideComponent"
import CardProduct from "../assets/carteProduit"
import ParallaxPub from "./parallaxPub";
import axios from "axios";


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
    },[])
    return (
    <>
        <HomeSlide /> 

      <div className="title1 section-t-space">
      <h4> produits exclusifs</h4>
      <h2 className="title-inner1">Produits</h2>
      </div>
      {/* <!-- product section start --> */}
      <section className="section-b-space ratio_asos">
      <div className="container">
        <div className="row search-product">
      {listMateriel.map((materialItem, index) => (
            {/* <CartProduitModel key={index} materielItem={materialItem} /> */}
      ))}
      </div>
      </div></section>
      
      
      <CardProduct />
      <ParallaxPub/>
      
    </>
    );
}

export default HomePage;