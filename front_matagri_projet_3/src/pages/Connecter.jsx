import Avatar from "./avatar";
import Connect from "./profiles";

function Connecter({props}) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <Avatar />;
    }
    return <Connect />;
  }

export default Connecter;