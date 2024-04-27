import { useEffect, useState } from "react";

function ViewImgTable() {
    const [images, setImages] = useState([]);
    const [nameImg, setNameImg] = useState();

  
    return (
      <>
        <img src={`${process.env.PUBLIC_URL}/assets/images/materiels/image/IMG_3509.jpg`} width={50}/>
      </>
    );
  }
  
  export default ViewImgTable;

