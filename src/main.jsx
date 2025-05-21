import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Signup from "./pages/signup";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Tenis from "./pages/tenis";
import Basketball from "./pages/basketball";
import Handball from "./pages/handball";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tenis" element={<Tenis />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/handball" element={<Handball />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
