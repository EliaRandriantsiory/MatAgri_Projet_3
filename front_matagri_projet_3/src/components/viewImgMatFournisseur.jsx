import { useEffect, useState } from "react";

function ViewImgTable() {
    const [images, setImages] = useState([]);
    const [nameImg, setNameImg] = useState();

    

        
  
    // setNameImg("../../public/assets/images/materiels/image/IMG_3509.jpg")
    // Assurez-vous que nameImg a une valeur avant de l'utiliser
    // const name = nameImg || ''; // Utilisez une valeur par défaut si nameImg est undefined ou null
  
    return (
      <>
        {/* <img className="image-item" src={"IMG_3509.jpg"} alt="image" /> */}
        <img src={`${process.env.PUBLIC_URL}/assets/images/materiels/image/IMG_3509.jpg`} width={50}/>
        {/* <img src={`${process.env.PUBLIC_URL}/img/${imageName}`} width={500}/> */}
      </>
    );
  }
  
  export default ViewImgTable;

// import React, { useEffect } from "react";

// function AfficherImage() {
//   const images = ["Photo.jpg", "tract.jpg", "tract2.jpg", "tract3.jpg"];

//   function ImageComponent() {
//     return images.map((name, index) => (
//       <img
//         key={index}
//         className="image-item"
//         src={name}
//         alt="image"
//       />
//     ));
//   }

//   useEffect(() => {
//     const myTimer = setInterval(() => {
//       console.log("timer appelé");
//     }, 1000);
//     return () => clearInterval(myTimer);
//   }, []);

//   return (
//     <div className="flex align-items-center justify-content-between">
//       <h1>TEST BE IMAGE BE</h1>
//       <div className="image-container">
//         <ImageComponent />
//       </div>
//     </div>
//   );
// }

// export default AfficherImage;
