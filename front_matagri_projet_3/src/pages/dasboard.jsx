import axios from "axios";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";

function DashboardUser() {
  const [currentUserTest, setCurrentUsertest] = useState();
  useEffect(() => {
    axios.post('http://localhost:8082/api/home/getCurrentUser',{
      email:"rakotobe@gmail.com",
      password:""
    })
  .then((response) => {
    // Récupérer les données renvoyées par le backend
    // setCurrentUsertest(response.data);
    // console.log(typeof(currentUserTest))
    console.log(response.data)
    
  })
  .catch((error) => {
    // Gérer les erreurs de la requête
    console.error(error.data);
  });


  },[])
  
  return <>
  {/* Bonjour{currentUser} */}
  </>;
}

export default DashboardUser;
