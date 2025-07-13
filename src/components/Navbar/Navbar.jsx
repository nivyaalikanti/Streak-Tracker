import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo"><a href="http://localhost:5173/"><img src={logo} alt="Logo"style={{ width: '30px',height:'28px',marginTop:'5px'}} /> Streak Tracker</a></div>
      
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/login" className="btn-text">Login</Link>
        <Link to="/signup" className="signup">Sign Up</Link>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
