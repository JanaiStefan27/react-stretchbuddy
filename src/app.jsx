import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Tenis from "./pages/sports/tenis";
import Basketball from "./pages/sports/basketball";
import Football from "./pages/sports/football";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeProvider } from "./context/themecontext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tenis" element={<Tenis />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/football" element={<Football />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
