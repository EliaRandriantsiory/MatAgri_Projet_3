import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/AuthenticationPage/LoginPage";
import SignUpCooperative from "./pages/AuthenticationPage/SignUpCooperative";
import SignUpProvider from "./pages/AuthenticationPage/SignUpProvider";
import SignUp from "./pages/AuthenticationPage/SignupPage";
import Dashboard from "./pages/Dashboard/Fournisseur/dashboardfour";
import HomePage from "./pages/homePage/homepage";
import HomePage_Layout from "./pages/homepage_Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<HomePage_Layout />>
          <Route path="/" element=<HomePage /> />
          <Route path="/home" element=<HomePage /> />
          <Route path="/Login" element=<Login /> />
          <Route path="/SignUp" element=<SignUp /> />
          <Route path="/SignUpProvider" element=<SignUpProvider /> />
          <Route path="/SignUpCooperative" element=<SignUpCooperative /> />
        </Route>
        <Route>
        <Route path="/dashboard-fournisseur" element=<Dashboard />/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
