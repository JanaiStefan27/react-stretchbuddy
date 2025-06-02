import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Tenis from "./pages/sports/tenis";
import Basketball from "./pages/sports/basketball";
import Football from "./pages/sports/football";
import Layout from "./components/layout";
import { ThemeProvider } from "./context/themecontext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="tenis" element={<Tenis />} />
            <Route path="basketball" element={<Basketball />} />
            <Route path="football" element={<Football />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
