import { BrowserRouter, Route, Routes } from "react-router-dom";
import Market from "../pages/Merket";
import Home from "../pages/Home";
import Tuitorial from "../pages/Tuitorial";
import Navbar from "../components/Navbar";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Footer from "../components/Footer";
function HomeRouter() {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/market" element={<Market />} />
                <Route path="/tuitorial" element={<Tuitorial />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default HomeRouter;