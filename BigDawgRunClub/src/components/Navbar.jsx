import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      console.log("Toggle Menu clicked");
      setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
      setMenuOpen(false);
  };

  return (
      <div className="Navbar">
          <div className={`hamburger ${isMenuOpen ? "menu-open" : ""}`} onClick={toggleMenu}>
              ☰
          </div>
          {isMenuOpen && (
              <div className="menu-overlay">
                  <ul className="menu menu-open">
                      <li><a href="#Home" onClick={closeMenu}>Home</a></li>
                      <li><a href="#Schedule" onClick={closeMenu}>Schedule</a></li>
                      <li><a href="#Connect" onClick={closeMenu}>Connect</a></li>
                      <li><a href="#Gallery" onClick={closeMenu}>Photo Gallery</a></li>
                      <li><a href="#Login" onClick={closeMenu}>Login</a></li>
                      <li><a href="#Signup" onClick={closeMenu}>Sign up</a></li>
                  </ul>
                  <div className="close-button" onClick={closeMenu}>
                      <FontAwesomeIcon icon={faTimes} />
                  </div>
              </div>
          )}
      </div>
  );
};

export default Navbar;
