import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      alert("Te-ai delogat!");
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          StretchBuddy
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Sporturi
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            {!user ? (
              <>
                <Link to="/login" className="btn btn-outline-light">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-light">
                  Signup
                </Link>
              </>
            ) : (
              <>
                <span className="text-white">Salut, {user.email}</span>
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
