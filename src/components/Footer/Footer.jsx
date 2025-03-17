import "./Footer.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/new_logo_1.svg";
import instaIcon from "../../assets/insta-icon.svg";
import LinkedInIcon from "../../assets/linkedIn-icon.png";

function Footer() {
  return (
    <div class="footer-wrapper">
      <div class="wrapper">
        <div class="footer-container">
          <div class="footer-year">
            <p>© 2025 | All rights reserved</p>
          </div>
          <div class="footer-logo-wrapper">
            <NavLink to="/" class="logo-wrapper">
              <img src={Logo} alt="My Logo" />
            </NavLink>
          </div>
          <div class="footer-socials">
            <div class="socialIcon">
              <img src={instaIcon} alt="instagram-icon"/>
            </div>
            <div class="socialIcon">
              <img src={LinkedInIcon} alt="linkedin-icon"/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
