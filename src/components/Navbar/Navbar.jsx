import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/new_logo_1.svg";

function Navbar(){
  return(
    <div class="wrapper">
      <div class="nav-wrapper">
        <div class="logo-wrapper">
          <img src={Logo} alt="My Logo"/>
        </div>
        <div class="menu-wrapper"></div>
      </div>

    </div>
  )
}

export default Navbar;