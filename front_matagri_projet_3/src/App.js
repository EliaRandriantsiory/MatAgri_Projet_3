import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import HomePage from "./pages/homePage/homepage";
import Login from "./pages/AuthenticationPage/LoginPage";
import SignUp from "./pages/AuthenticationPage/SignupPage";
import SignUpProvider from "./pages/AuthenticationPage/SignUpProvider";
import SignUpCooperative from "./pages/AuthenticationPage/SignUpCooperative";
import HomePage_Layout from "./pages/homepage_Layout";

function App() {
  return (
    <BrowserRouter>

    <Routes>
    <Route path="/" element=<HomePage_Layout /> >
    <Route path="/" element=<HomePage /> />
          <Route path="/Login" element=<Login /> />
          <Route path="/SignUp" element=<SignUp /> />
          <Route path="/SignUpProvider" element=<SignUpProvider /> />
          <Route path="/SignUpCooperative" element=<SignUpCooperative /> />
        
    </Route>
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
