import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer simple-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="https://img.icons8.com/ios-filled/24/ffffff/fire-element.png"
            alt="Logo"
          />
          <span>Streak Tracker</span>
        </div>
        <p className="footer-copy">© 2025 Streak Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
