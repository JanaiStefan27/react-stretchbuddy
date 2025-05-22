import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-white">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/features" className="nav-link px-2 text-white">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="/pricing" className="nav-link px-2 text-white">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="/faqs" className="nav-link px-2 text-white">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link px-2 text-white">
            About
          </a>
        </li>
      </ul>
      <p className="text-center text-white mb-0">
        &copy; 2025 StretchBuddy, Inc.
      </p>
    </footer>
  );
};

export default Footer;
