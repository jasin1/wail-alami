import "./Home.css";
import Navbar from "../../components/navbar/navbar";
import CTA from "../../components/CTA/CTA.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import heroIMG from "../../assets/wail_main-home-hero.jpg";

function Home() {
  return (
    <main>
      <Navbar/>
      <div class="home-banner">
        <div class="img-wrapper home-img">
          <img className="hero-wail-img" src={heroIMG} alt=""/>
        </div>
        <div class="heading-wrapper">
        <h1 className="h1-display">Wail Alami</h1>
        </div>
      </div>
        
        <CTA/>
        <Footer/>
    </main>
  );
}

export default Home;
