import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Modification from "./modification";
import SupprimerMateriel from "./suppressionMateriel";
import PrintTextPrix from "../textComponent/printPrix";
import AddProduit from "../../pages/Dashboard/Fournisseur/AddProduit";
import PrintDetailTechMat from "../textComponent/printDescTechMateriel";
import PrintPrixUser from "../textComponent/printPrixUser";

function TableRow({ materielItem }) {
  const [currentMAt, setCurrentMat] = useState({});
  const [listImage, setListImage] = useState([]);
  const [descriptionTech, setDescriptionTech] = useState([]);

  useEffect(() => {
    setCurrentMat(materielItem);

    // setListImage(JSON.parse(currentMAt.imagePath))
  }, []);
  console.log(materielItem);
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
      <td>
        <div>
          <div><b style={{textTransform:"capitalize"}} >{currentMAt.nomMat}</b></div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              textAlign: "left",
            }}
          >
            {currentMAt.techniqueMat}
          </div>
          {/* <PrintDetailTechMat desctechMat={currentMAt.techniqueMat} /> */}
        </div>
      </td>
      <td>{currentMAt.categorieMat} </td>

      <td className="fw-bold text-theme">
        <PrintPrixUser TextPrix={currentMAt.prixMAt} monnai={"MLG"} />
      </td>
      <td>{currentMAt.stockMat} unité(s)</td>
      <td>
        {/* <Modification materielItem={{ materielItem }} /> */}
        <Modification materielItem={{materielItem}} />

        <SupprimerMateriel materielItem={{ materielItem }} />
      </td>
    </tr>
  );
}
export default TableRow;
