import React from "react";

const ProductBox = ({ materialItem }) => {
  // const [materialItem,setMatItem] = useState({...materialItem})
  return (
    <div className="col-xl-3 col-6 col-grid-box">
      <div className="product-box">
        <div className="img-wrapper">
          <div className="front">
            <a href="#">
            {/* <img
                src={`${process.env.PUBLIC_URL}/assets/images/materiels/${
                  JSON.parse(materialItem.materialItem.imagePath)[0]
                }`}
                width={500}
                className="img-fluid blur-up lazyload bg-img"
              /> */}
            </a>
          </div>
          
        </div>
        <div className="product-detail">
          <div>
            <a href="product-page(no-sidebar).html">
              <h6>{materialItem.materialItem.nomMat} </h6>
            </a>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <h4>Ar 45 000.00</h4>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
