import { useEffect, useState } from "react";

function PrintDetailTechMat(desctechMat) {
    // console.log(desctechMat)

    const transformDesc =(StringDescMat)=>{
        
    }
    const [descTechMat_, setDescTechMat] = useState()
    useEffect(() => {
        // setDescTechMat(desctechMat)

    },[])


    console.log(desctechMat.desctechMat)
    // const transformedDesc = desctechMat
    return ( 
        <>
            {desctechMat.desctechMat}
        </>
     );
}

export default PrintDetailTechMat;