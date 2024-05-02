import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Modification from "./modification";
import SupprimerMateriel from "./suppressionMateriel";

function TableRow({ materielItem }) {
  const [currentMAt, setCurrentMat] = useState({});
  const [listImage, setListImage] = useState([]);

  useEffect(() => {
    setCurrentMat(materielItem);
    // setListImage(JSON.parse(currentMAt.imagePath))
  });

  // const maPromesse = new Promise((resolve, reject) => {
  //   setCurrentMat(materielItem)
  //   resolve(setListImage(JSON.parse(currentMAt.imagePath)))
  // })
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
      <td className="fw-bold text-theme">Ar {currentMAt.prixMAt}</td>
      <td>{currentMAt.stockMat} pcs</td>
      <td>
        <Modification materielItem={{ materielItem }} />
        <SupprimerMateriel />
      </td>
    </tr>
  );
}
export default TableRow;
