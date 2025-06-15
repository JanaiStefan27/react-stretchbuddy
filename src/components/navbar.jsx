import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useTheme } from "../context/themecontext";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [expanded, setExpanded] = useState(false); // toggle state
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
    setExpanded(false); // close menu on logout
  };

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  const closeMenu = () => setExpanded(false);

  return (
    <nav
      className={`navbar navbar-expand-lg shadow-sm px-4 ${
        theme === "dark" ? "bg-dark navbar-dark" : "bg-light navbar-light"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-3" to="/" onClick={closeMenu}>
          StretchBuddy
        </Link>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div
          className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
          id="main-navbar"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={closeMenu}>
                Sporturi
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <button
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
              className="btn btn-secondary"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>

            {!user ? (
              <>
                <Link
                  to="/login"
                  className="btn btn-primary"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-primary"
                  onClick={closeMenu}
                >
                  Signup
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/profile"
                  onClick={closeMenu}
                  title="Profil"
                  className={`text-decoration-none ${
                    theme === "dark" ? "text-light" : "text-dark"
                  }`}
                >
                  <span
                    role="img"
                    aria-label="profil"
                    style={{ fontSize: "1.8rem", cursor: "pointer" }}
                  >
                    👤
                  </span>
                </Link>

                <button onClick={handleLogout} className="btn btn-danger">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
