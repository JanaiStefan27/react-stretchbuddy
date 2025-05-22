import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import Signup from "./pages/signup";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Tenis from "./pages/tenis";
import Basketball from "./pages/basketball";
import Football from "./pages/football";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tenis" element={<Tenis />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/football" element={<Football />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
