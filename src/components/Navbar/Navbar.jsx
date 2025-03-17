import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/new_logo_1.svg";

function Navbar() {
  return (
    <div class="nav-wrapper">
      <div class="wrapper">
        <div class="nav-container">
          <NavLink 
          to="/"
          class="logo-wrapper">
            <img src={Logo} alt="My Logo" />
          </NavLink>
          <div class="menu-wrapper">
            <ul class="nav-links">
              <li>
                <NavLink
                to="/Over"
                className="nav-link"
                >Over mij</NavLink>
              </li>
              <li>
                <NavLink
                to="/Trainingen"
                className="nav-link"
                >Trainingen</NavLink>
              </li>
              <li>
                <NavLink
                to="/Acteren"
                className="nav-link"
                >Acteren</NavLink>
              </li>
              <li>
                <NavLink
                to="/Blog"
                className="nav-link"
                >Blog</NavLink>
              </li>
              <li>
                <NavLink
                to="/Contact"
                className="nav-link"
                >Contact</NavLink>
              </li>
        
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
