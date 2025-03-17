import "./Home.css";
import Navbar from "../../components/navbar/navbar";
import CTA from "../../components/CTA/CTA.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function Home() {
  return (
    <main>
      <Navbar/>
        <h1>Home</h1>
        <CTA/>
        <Footer/>
    </main>
  );
}

export default Home;
