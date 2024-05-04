import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AddProduct from "./components/componentproduct/addproduct";
import CartProduitModel from "./components/Produitcomponents/cartesProduitCompnent";
import DevisForm from "./pages/Panier/composant/getdate";
import Reserver from "./pages/Panier/Reserver";
import GoogleMapsDistance from "./pages/commande/interfacecommande";
import Distance from "./pages/commande/interfacecommande";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Distance />
  </React.StrictMode>
);

reportWebVitals();
