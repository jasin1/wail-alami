
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Over from "./pages/Over/Over.jsx";
import Trainingen from "./pages/Trainingen/Trainingen.jsx";
import Acteren from "./pages/Acteren/Acteren.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Blog from "./pages/Blog/Blog.jsx";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Over" element={<Over />} />
      <Route path="/Trainingen" element={<Trainingen />} />
      <Route path="/Acteren" element={<Acteren />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
     
    </>
  )
}

export default App
