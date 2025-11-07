import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import llogo from "../logo.png";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={llogo} alt="logo" />
      </div>
      <button
        className="navbar-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`navbar-links${open ? " open" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/products" className="nav-link" onClick={() => setOpen(false)}>Products</Link>
        <Link to="/approach" className="nav-link" onClick={() => setOpen(false)}>Approach</Link>
        <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>About Us</Link>
        <Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>Contact Us</Link>
      </div>
    </nav>
  );
}

export default NavBar;
