import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import "../css/animations.css";
import llogo from "../logo.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar nav-fade" role="navigation" aria-label="Main navigation">
      <div className="navbar-brand">
        <Link to="/" onClick={() => setOpen(false)} aria-label="Home">
          <img src={llogo} alt="logo" style={{ height: "3.2rem", width: "auto" }} />
        </Link>
      </div>

      <button
        className="navbar-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <div className={`navbar-links ${open ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/products" className="nav-link" onClick={() => setOpen(false)}>Products</Link>
        <Link to="/approach" className="nav-link" onClick={() => setOpen(false)}>Approach</Link>
        <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>About Us</Link>
        <Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>Contact Us</Link>
      </div>
    </nav>
  );
}
