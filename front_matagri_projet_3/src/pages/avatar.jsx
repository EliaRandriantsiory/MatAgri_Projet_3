import { Link } from "react-router-dom";

function Avatar() {
    return ( 
        
        <li className="onhover-div mobile-account">
        <div>
        <img
          src="../assets/images/jewellery/icon/avatar.png"
          className="opacity-1"
          alt=""
        />
        </div>
        <div className="show-div">
        <ul style={{ paddingLeft: '60px', paddingBottom:'10px',paddingTop:'10px', paddingRight: '0px', margin: '0' }}>
          <li>
            <Link to="/Login" style={{color : 'black', fontSize:'18px', textAlign:'center'}}>Se connecter</Link>
          </li>
          <br/>
          <li>
            <Link to="/choiceusers" style={{color : 'black', fontSize:'18px'}} data-lng="en">
              S' inscrire
            </Link>
          </li>
        </ul>
        </div>
      </li>
    );
}

export default Avatar;