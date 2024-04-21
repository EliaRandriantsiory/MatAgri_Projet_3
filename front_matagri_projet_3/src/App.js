import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import HomePage from "./pages/homePage/homepage";
import Login from "./pages/AuthenticationPage/LoginPage";
import SignUp from "./pages/AuthenticationPage/SignupPage";
import SignUpProvider from "./pages/AuthenticationPage/SignUpProvider";
import SignUpCooperative from "./pages/AuthenticationPage/SignUpCooperative";
import HomePage_Layout from "./pages/homepage_Layout";
import AboutPage from "./pages/homePage/Aboutus";
import ContactPage from "./pages/homePage/Contact";
import SearchPage from "./pages/homePage/Search";

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
          <Route path="/SignUp" element=<SignUp /> />
          <Route path="/SignUpProvider" element=<SignUpProvider /> />
          <Route path="/SignUpCooperative" element=<SignUpCooperative /> />
          {/* <Route path="/ajoutmateriel" element=<AjoutMateriel /> />   */}
        </Route>
        {/* <Route path="/" element=<PageProduit /> />   */}
        {/* <Route path="/" element = <PageProduit /> > */}
        {/* </Route>  */}
        {/* <Route path="/ajoutmateriel" element=<AjoutMateriel /> /> */}

        {/* <Route path="/article" element = <Articles/> />  */}
        {/* <Routes path="/article" element = <Articles/> /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
