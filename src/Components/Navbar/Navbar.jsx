import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.png';
import { Link } from 'react-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Toggle button (Mobile) */}
      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <img src={isOpen ? menu_close : menu_open} alt="Menu Toggle" />
      </div>

      {/* Menu */}
      <ul className={`navbar-menu ${isOpen ? "is-open" : ""}`}>
        <li>
          <Link 
            to="home" 
            className={menu === "home" ? "active nav-link" : "nav-link"} 
            onClick={() => { setMenu("home"); setIsOpen(false); }}
            smooth={true} duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="about" 
            className={menu === "about" ? "active nav-link" : "nav-link"} 
            onClick={() => { setMenu("about"); setIsOpen(false); }}
            smooth={true} duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="services" 
            className={menu === "services" ? "active nav-link" : "nav-link"} 
            onClick={() => { setMenu("services"); setIsOpen(false); }}
            smooth={true} duration={500}
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            to="contact" 
            className={menu === "contact" ? "active nav-link" : "nav-link"} 
            onClick={() => { setMenu("contact"); setIsOpen(false); }}
            smooth={true} duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
