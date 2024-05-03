import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Avatar({isConnected}) {
    return ( 
        
        <li className="onhover-div mobile-account">
         {!isConnected && (
        <a href>
        <img
          src="../assets/images/jewellery/icon/avatar.png"
          className="opacity-1"
          alt=""
        />
        </a>
        )}
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
          <br/>
          <li>
            <Link to="/PageAccueilAgriculteur" style={{color : 'black', fontSize:'18px'}} data-lng="en">
              Profile
            </Link>
          </li>
        </ul>
        {isConnected && (
                <Link to="/">
                    <FontAwesomeIcon icon="fa-user" />
                </Link>
            )}
        </div>
      </li>
    );
}

export default Avatar;