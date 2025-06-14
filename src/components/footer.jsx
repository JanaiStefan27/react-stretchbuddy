import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTheme } from "../context/themecontext";
import { auth } from "../firebase/firebase";

const Footer = () => {
  const { theme } = useTheme();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <footer
      className={`footer-custom text-light py-4 border-top mt-auto ${theme}`}
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-brand">StretchBuddy</h5>
            <p className="footer-description">
              Ghidul tău de încredere pentru exerciții de încălzire eficiente și
              sigure. Ideal pentru sportivi de orice nivel!
            </p>
          </div>

          {/* Navigație */}
          <div className="col-md-4 mb-4">
            <h6 className="footer-title">Navigație</h6>
            <ul className="footer-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href={user ? "/profile#routine" : "/services"}>Exerciții</a>
              </li>
              {!user && (
                <li>
                  <a href="/signup">Înregistrare</a>
                </li>
              )}
            </ul>

            <p className="footer-text text-muted mt-3">
              © {new Date().getFullYear()} StretchBuddy. Toate drepturile
              rezervate.
            </p>
          </div>

          {/* Social */}
          <div className="col-md-4 mb-4">
            <h6 className="footer-title">Social</h6>
            <ul className="footer-list social-icons">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <FaYoutube /> YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
