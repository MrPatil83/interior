import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import Office from "../src/components/Portfolio/Office";
import House from "./components/Portfolio/House";
import Appartment from "./components/Portfolio/Appartment";
import Kitchen from "./components/Portfolio/Kitchen";
import Living from "./components/Portfolio/Living";
import CafeResturant from "./components/Portfolio/CafeResturant";
import Bathroom from "./components/Portfolio/Bathroom";
import Classroom from "./components/Portfolio/Classroom";
import BedroomPage from "./pages/BedroomPage";
import { Bedroom } from "./components/Portfolio/Bedroom";
import KitchenPages from "./pages/KitchenPages";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bedroomPage" element={<BedroomPage />} />
        <Route path="/kitchenPages" element={<KitchenPages />} />
        <Route path="/portfolio/office" element={<Office/>} />
        <Route path="/portfolio/house" element={<House/>} />
        <Route path="/portfolio/appartment" element={<Appartment/>} />
        <Route path="/portfolio/bedroomarea" element={<Bedroom/>} />
        <Route path="/portfolio/kitchen" element={<Kitchen/>} />
        <Route path="/portfolio/living" element={<Living/>} />
        <Route path="/portfolio/cafeResturant" element={<CafeResturant/>} />
        <Route path="/portfolio/bathroom" element={<Bathroom/>} />
        <Route path="/portfolio/classroom" element={<Classroom/>} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
