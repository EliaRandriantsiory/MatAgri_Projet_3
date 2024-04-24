import Modification from "./modification";
import SupprimerMateriel from "./suppressionMateriel";

function TableRow  ({materielItem})  {
    return (
      <tr>
        <th scope="row">
          <img
            src="/front_matagri_projet_3/public/assets/images/dashboard/product/1.jpg"
            alt=""
            className="blur-up lazyloaded"
          />
        </th>
        <td>{materielItem.nomMat}</td>
        <td>{materielItem.categorieMat} </td>
        <td className="fw-bold text-theme">{materielItem.PrixMAt} Ar</td>
        <td>{materielItem.stockMat}</td>
        <td>
          <Modification />
          <SupprimerMateriel />
        </td>
      </tr>
    );
    
  };
  export default TableRow;