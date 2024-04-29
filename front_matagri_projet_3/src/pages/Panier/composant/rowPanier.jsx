import React, { useEffect, useState } from "react";
import Reserver from "../Reserver";
import PrintTextPrix from "../../../components/textComponent/printPrix";

function RowPanierComponent({ materielItem_ }) {
  const [materielItem, setMaterielItem] = useState({});
  const [prixTotal, setPrixTotal] = useState();
  useEffect(() => {
    setMaterielItem(materielItem_);
    setPrixTotal(materielItem_.stockMat * materielItem_.prixMAt);
  }, []);
  useEffect(() => {}, [materielItem]);
  //   console.log(materielItem);

  const handleNomProductsChange = (event) => {
    console.log(event.target.value);
  };
  const handleQuantityChange = (event) => {
    let qtt = event.target.value;
    setPrixTotal(qtt * materielItem.prixMAt);
  };
  const handlePrixChange = (event) => {
    console.log(event.target.value);
  };
  const handleTotalChange = (event) => {
    console.log(event.target.value);
  };
  console.log(materielItem.imagePath);
  return (
    <tr>
      <td>
        {/* <img
          src={`${process.env.PUBLIC_URL}/assets/images/materiels/${
            JSON.parse(materielItem.imagePath)[0]
          }`}
          width={250}
          className="img-fluid blur-up lazyload bg-img"
        /> */}
      </td>
      <td>{materielItem.nomMat}</td>
      <td>
        <div className="qty-box">
          <div className="input-group">
            <input
              type="number"
              name="quantity"
              className="form-control input-number"
              defaultValue={materielItem.stockMat}
              onChange={handleQuantityChange}
              min={1}
            />
          </div>
        </div>
      </td>
      <td>
        {materielItem.prixMAt}
        {/* <PrintTextPrix TextPrix={materielItem.prixMAt} monnai={"MLG"} /> */}
      </td>
      <td>
        <div>
          <Reserver />
        </div>
      </td>
      <td>
        {prixTotal}
        {/* <PrintTextPrix TextPrix={prixTotal} monnai={"MLG"} /> */}
      </td>
      <td>
        <a href="#" className="icon">
          <i className="ti-close"></i>
        </a>
      </td>
    </tr>
  );
}

export default RowPanierComponent;
