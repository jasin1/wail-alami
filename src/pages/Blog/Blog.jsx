import "./Blog.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/Footer/Footer.jsx";
import CTA from "../../components/CTA/CTA.jsx";

function Blog(){

  return(
    <main>
      <Navbar/>
      <h1>Blog</h1>
      <CTA/>
      <Footer/>
    </main>
  );

}

export default Blog;