import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Modification from "./modification";
import SupprimerMateriel from "./suppressionMateriel";
import PrintTextPrix from "../textComponent/printPrix";
import AddProduit from "../../pages/Dashboard/Fournisseur/AddProduit";

function TableRow({ materielItem }) {
  const [currentMAt, setCurrentMat] = useState({});
  const [listImage, setListImage] = useState([]);

  useEffect(() => {
    setCurrentMat(materielItem);
    // setListImage(JSON.parse(currentMAt.imagePath))
  });
console.log(materielItem)
  return (
    <tr>
      <th scope="row">
        {}
        {currentMAt.imagePath
          ? JSON.parse(currentMAt.imagePath).map((imgMat) => (
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/materiels/${imgMat}`}
                width={500}
                className="blur-up lazyloaded"
              />
            ))
          : null}
      </th>
      <td>{currentMAt.nomMat}</td>
      <td>{currentMAt.categorieMat} </td>
      {/* <PrintTextPrix TextPrix={currentMAt.prixMAt} monnai={"MLG"} /> */}
      <td className="fw-bold text-theme">{currentMAt.prixMAt} </td>
      <td>{currentMAt.stockMat} pcs</td>
      <td>
        {/* <Modification materielItem={{ materielItem }} /> */}
        <Modification setStateCrudProduct={materielItem} />

        {/* <SupprimerMateriel materielItem={{ materielItem }} /> */}
      </td>
    </tr>
  );
}
export default TableRow;
