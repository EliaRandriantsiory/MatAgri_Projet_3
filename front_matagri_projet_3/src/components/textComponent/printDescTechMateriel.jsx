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
    <ul className="list" style={{listStyle: 'square'}}>
      {descTable.map((item, index) => (
        <><li key={index} className="list-item">{item}</li><br/></>
      ))}
    </ul>
  );
};

export default PrintDetailTechMat;
