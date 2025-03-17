import { NavLink } from "react-router-dom";
import "./CTA.css";

function CTA() {
  return (
    <div class="CTA-wrapper">
      <div class="wrapper">
        <div class="CTA-container">
          <div class="quote-wrapper">
            <q className="">Samen groeien begint bij<br/> contact maken.</q>
          </div>
          <div class="cta-content">
            <p>
              Meld je aan voor mijn mail lijst waarin ik informatie deel over
              nieuwe blogs, zelfontwikkeling, gezondheid, boeken en/of gewoon
              waar ik me mee bezig houd.
            </p>
           
              <NavLink to="/Contact" className="normal-button">
                Contact
              </NavLink>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
