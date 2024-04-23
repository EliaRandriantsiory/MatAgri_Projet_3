import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import InscriptionAgriculteur from "./pages/AuthenticationPage/inscriptionagricultuer";
import LabelwithInput from "./components/labelwithInputComponent";
import DropdownInfoAuthUser from "./components/homepagecomponents/infoAuthUser";
import HomeSlide from "./components/homepagecomponents/homeSlideComponent";
import CardProduct from "./components/homepagecomponents/carteProduit";
import cartProduitModel from "./components/Produitcomponents/cartesProduitCompnent";

import DashboardUser from "./pages/dasboard";
import Login from "./pages/AuthenticationPage/LoginPage";
import SignUpCooperative from "./pages/AuthenticationPage/SignUpCooperative";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
