import { useEffect, useState } from "react";

function PrintTextPrix(TextPrix, monnai) {
  if (monnai === "MLG") {
    const monnaisPrix = "Ar";
  }
  // console.log(TextPrix.TextPrix);

  const transformSum = (sum) => {
    const strSum = sum.toString();
    const groups = [];
    // console.log(strSum);
    for (let i = strSum.length; i > 0; i -= 3) {
      groups.unshift(strSum.slice(Math.max(0, i - 3), i));
    }
    return groups.join(" ");
  };

  const transformedSum = transformSum((TextPrix.TextPrix));
  // console.log(transformedSum);

  return <>{"Ar " + transformedSum + ",00"}</>;
}

export default PrintTextPrix;
