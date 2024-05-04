import { json } from "react-router-dom";
import PrintTextPrix from "../../components/textComponent/printPrix";
import ProductCard from "../../components/Produitcomponents/cartesProduitCompnent";

function CardProduct({ listmatHomePage }) {
  // console.log(listmatHomePage);
  return (
    <>
      <div className="title1 section-t-space">
        {/* <h4 style={{ color: "#862b0d" }}> Produits exclusifs</h4> */}
        <h2 className="title-inner1">Les Matériels disponibles</h2>
      </div>
      <section className="section-b-space ratio_asos">
        <div className="container">
          <div className="row search-product">
            {listmatHomePage.map((matHomePage) => (
              <ProductCard materialItem={matHomePage} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CardProduct;
