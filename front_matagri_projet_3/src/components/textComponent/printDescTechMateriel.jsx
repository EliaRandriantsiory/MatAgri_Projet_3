import { useEffect, useState } from "react";
import React from 'react';

// function PrintDetailTechMat({ desctechMat }) {
//   //   let descTable = String(desctechMat.desctechMat).split("\n");
//   //   console.log(descTable);
//   //   descTable.forEach((element) => {
//   //     console.log(element);
//   //   });
//   return <>{desctechMat}</>;
// }

// export default PrintDetailTechMat;


const PrintDetailTechMat = ({ desctechMat }) => {
  
  let descTable = String(desctechMat).split("\n");
  // console.log(descTable)
  return (
    <ul className="list" style={{marginLeft: "20px"}}>
      {descTable.map((item, index) => (
        <><b><li key={index} className="list-item">{item}</li></b><br/></>
      ))}
    </ul>
  );
};

export default PrintDetailTechMat;
