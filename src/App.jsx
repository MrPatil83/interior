import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import Office from "../src/components/Portfolio/Office";
import House from "./components/Portfolio/House";
import Appartment from "./components/Portfolio/Appartment";
import Bedroom from "./components/Portfolio/Bedroom";
import Kitchen from "./components/Portfolio/Kitchen";
import Living from "./components/Portfolio/Living";
import CafeResturant from "./components/Portfolio/CafeResturant";
import Bathroom from "./components/Portfolio/Bathroom";
import Classroom from "./components/Portfolio/Classroom";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/office" element={<Office/>} />
        <Route path="/house" element={<House/>} />
        <Route path="/appartment" element={<Appartment/>} />
        <Route path="/bedroom" element={<Bedroom/>} />
        <Route path="/kitchen" element={<Kitchen/>} />
        <Route path="/living" element={<Living/>} />
        <Route path="/cafeResturant" element={<CafeResturant/>} />
        <Route path="/bathroom" element={<Bathroom/>} />
        <Route path="/classroom" element={<Classroom/>} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
