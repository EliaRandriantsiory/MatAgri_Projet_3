import {BrowserRouter ,Routes,Route} from "react-router-dom"
import logo from './logo.svg';
import './App.css';

import HomePage_Layout from "./pages/homepage_Layout";
import HomePage from "./pages/homePage/homepage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     
    <Route path="/" element=<HomePage_Layout /> >
        {/* <Route path="/" element=<HomePage /> />   */}
        {/* <Route path="/ajoutmateriel" element=<AjoutMateriel /> />   */}
    </Route>
    {/* <Route path="/" element=<PageProduit /> />   */}
        {/* <Route path="/" element = <PageProduit /> > */}
        {/* </Route>  */}
        {/* <Route path="/ajoutmateriel" element=<AjoutMateriel /> /> */}
          
          {/* <Route path="/article" element = <Articles/> />  */}
          {/* <Route path="/article" element = <Articles/> /> */}
      
      
    </Routes>
</BrowserRouter>
  );
}

export default App;
