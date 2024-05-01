import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AddProduct from "./components/componentproduct/addproduct";
import CartProduitModel from "./components/Produitcomponents/cartesProduitCompnent";
import DevisForm from "./pages/CalculDevis";
import DevisComponents from "./pages/DevisComponent";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <DevisForm /> */}
    <DevisComponents />
  </React.StrictMode>
);

reportWebVitals();
