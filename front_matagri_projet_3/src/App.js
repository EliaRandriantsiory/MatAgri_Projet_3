/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/AuthenticationPage/LoginPage";
import SignUpCooperative from "./pages/AuthenticationPage/SignUpCooperative";
import SignUpProvider from "./pages/AuthenticationPage/SignUpProvider";
import Terme from "./pages/AuthenticationPage/Terme";
import TermeF from "./pages/AuthenticationPage/TermeF";
import Choiceusers from "./pages/AuthenticationPage/choiceusers";
import InscriptionAgriculteur from "./pages/AuthenticationPage/inscriptionagricultuer";
import DashBordAgriculteur from "./pages/Dashboard/Agriculteur/dashboardAgriculteur";
import PageAccueilAgriculteur from "./pages/Dashboard/Agriculteur/pageaccueilagriculteur";
import Dashboard from "./pages/Dashboard/Fournisseur/dashboardfour";
import DescriptionProduit from "./pages/Dashboard/Fournisseur/description";
import Panier from "./pages/Panier/Panier";
import DashboardUser from "./pages/dasboard";
import AboutPage from "./pages/homePage/Aboutus";
import ContactPage from "./pages/homePage/Contact";
import Material from "./pages/homePage/Material";
import SearchPage from "./pages/homePage/Search";

import HomePage from "./pages/homePage/homepage";
import HomePage_Layout from "./pages/homepage_Layout";










function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<HomePage_Layout /> >
          <Route path="/" element=<HomePage /> />
          <Route path="/home" element=<HomePage /> />
          <Route path="/about" element=<AboutPage /> />
          <Route path="/contact" element=<ContactPage /> />
          <Route path="/search" element=<SearchPage /> />
          <Route path="/Material" element=<Material /> />
          <Route path="/Login" element=<Login /> />
          <Route path="/choiceusers" element=<Choiceusers /> />
          <Route path="/SignUpProvider" element=<SignUpProvider /> />
          <Route path="/SignUpCooperative" element=<SignUpCooperative /> />
          <Route path="/SignUpProvider" element=<SignUpProvider /> />

          <Route path="/InscriptionAgriculteur" element=<InscriptionAgriculteur /> />
          <Route path="/SignUpCooperative" element=<SignUpCooperative /> />
          <Route path="/Panier" element=<Panier /> />

          </Route>
          <Route path="/Dashboard" element=<DashboardUser /> />
          <Route path="/ProfileAgriculteur" element=<PageAccueilAgriculteur /> >
           <Route path="/ProfileAgriculteur" element=<DashBordAgriculteur /> />
           </Route>
          <Route>
          <Route path="/description" element=<DescriptionProduit /> />
          </Route>
          <Route>
          <Route path="/TermeF" element=<TermeF /> />
          </Route>
          <Route path="/carouselImage" element=<homePage /> />
          <Route path="/dashboard_fournisseur" element=<Dashboard /> />
          <Route path="/terme" element=<Terme /> />
          </Routes>
          {/* <Route path="/Panier" element=<Panier /> />
          <Route path="/Panier" element=<PanierTest /> />

          <Route path="/Devis" element=<Devis /> />
          <Route path="/Paiement" element=<Paiement /> />

          <Route
            path="/InscriptionAgriculteur"
            element=<InscriptionAgriculteur />
          />
          <Route path="/SignUpCooperative" element=<SignUpCooperative /> />
        </Route>
        <Route path="/Dashboard" element=<DashboardUser /> />
        <Route
          path="/PageAccueilAgriculteur"
          element=<PageAccueilAgriculteur />
        >
          <Route
            path="/PageAccueilAgriculteur"
            element=<DashBordAgriculteur />
          />
        </Route>
        <Route>
          <Route path="/description" element=<Description /> />
        </Route>
        <Route>
          <Route path="/TermeF" element=<TermeF /> />
        </Route>
        <Route path="/carouselImage" element=<homePage /> />
        <Route path="/dashboard_fournisseur" element=<Dashboard /> />
        <Route path="/reserverAddPanier" element=<ReserverPanier /> />
        <Route path="/terme" element=<Terme /> />
      </Routes> */}




    </BrowserRouter>
  );
}
export default App;