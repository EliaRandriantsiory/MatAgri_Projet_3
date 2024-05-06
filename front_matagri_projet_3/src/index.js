import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AddProduct from "./components/componentproduct/addproduct";
import CartProduitModel from "./components/Produitcomponents/cartesProduitCompnent";
<<<<<<< HEAD
import DevisForm from "./pages/Panier/composant/getdate";
import Reserver from "./pages/Panier/Reserver";
import InscriptionAgriculteur from "./pages/AuthenticationPage/inscriptionagricultuer";
import PrintDetailTechMat from "./components/textComponent/printDescTechMateriel";
=======
import DevisForm from "./pages/CalculDevis";
import DevisComponents from "./pages/DevisComponent";

>>>>>>> 9e5d11938a6c91176cf0bd420ecc792e8998dac9

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <DevisForm /> */}
    <DevisComponents />
  </React.StrictMode>
);

reportWebVitals();
