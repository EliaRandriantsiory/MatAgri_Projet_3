import { useEffect, useState } from "react";

function PrintTextPrix(TextPrix,monnai) {
    if(monnai==="MLG"){
        const monnaisPrix = "Ar"
    }
console.log(TextPrix.TextPrix)
    // Fonction pour transformer une somme en une chaîne avec des groupes de trois chiffres
  const transformSum = (sum) => {
    const strSum = sum.toString(); // Convertir la somme en une chaîne de caractères
    const groups = []; // Tableau pour stocker les groupes de trois chiffres
    console.log(strSum)
    // Diviser la chaîne de caractères en groupes de trois chiffres
    for (let i = strSum.length; i > 0; i -= 3) {
      groups.unshift(strSum.slice(Math.max(0, i - 3), i));
    }

    // Joindre les groupes avec des virgules
    return groups.join(' ');
  };
// console.log(transformSum(TextPrix))
  // Appeler la fonction de transformation et afficher le résultat
  const transformedSum = transformSum(TextPrix.TextPrix);
  console.log(transformedSum)
    return ( 
        <>
            {"Ar "+transformedSum+",00"}
        </>
     );
}

export default PrintTextPrix;