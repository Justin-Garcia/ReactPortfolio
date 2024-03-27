import JAGLogo from "../../assets/jaglogo.svg"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
        <Link to="/">
      <img src={JAGLogo} alt="JAG" id="logo" />
      </Link>
    </div>
  );
}

export default Footer;
