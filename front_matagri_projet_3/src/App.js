import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/AuthenticationPage/LoginPage";
import SignUpCooperative from "./pages/AuthenticationPage/SignUpCooperative";
import SignUpProvider from "./pages/AuthenticationPage/SignUpProvider";
import SignUp from "./pages/AuthenticationPage/SignupPage";
import Dashboard from "./pages/Dashboard/Fournisseur/dashboardfour";
import HomePage from "./pages/homePage/homepage";
import HomePage_Layout from "./pages/homepage_Layout";
import InscriptionAgriculteur from "./pages/AuthenticationPage/inscriptionagricultuer";

import AboutPage from "./pages/homePage/Aboutus";
import ContactPage from "./pages/homePage/Contact";
import SearchPage from "./pages/homePage/Search";
import PageAccueilAgriculteur from "./pages/dashbords/pageaccueilagriculteur";
import DashBordAgriculteur from "./pages/dashbords/dashboardAgriculteur";
import Choiceusers from "./pages/AuthenticationPage/choiceusers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<HomePage_Layout />>
          <Route path="/" element=<HomePage /> />
          <Route path="/home" element=<HomePage /> />
          <Route path="/about" element=<AboutPage /> />
          <Route path="/contact" element=<ContactPage /> />
          <Route path="/search" element=<SearchPage /> />
          <Route path="/Login" element=<Login /> />
          <Route path="/choiceusers" element=<Choiceusers /> />
          <Route path="/SignUpProvider" element=<SignUpProvider /> />
          <Route path="/SignUpCooperative" element=<SignUpCooperative /> />
          <Route path="/SignUpProvider" element=<SignUpProvider /> />
          <Route
            path="/InscriptionAgriculteur"
            element=<InscriptionAgriculteur />
          />
          <Route path="/SignUpCooperative" element=<SignUpCooperative /> />

          {/* <Route
            path="/InscriptionAgriculteur"
            element=<InscriptionAgriculteur />
          /> */}
        </Route>
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
          <Route path="/dashboard_fournisseur" element=<Dashboard /> />
        </Route>
      </Routes>
      <></>
    </BrowserRouter>
  );
}

export default App;
