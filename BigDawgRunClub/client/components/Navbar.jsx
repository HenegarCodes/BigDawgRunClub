import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Big Dawg Run Club</div>
      <div className="menu-icon">&#9776;</div>
      <ul className="menu-items">
        <li><a href="/">Home</a></li>
        <li><a href="/running-schedule">Running Schedule</a></li>
        <li><a href="/connect">Connect with Us</a></li>
        <li><a href="/photo-gallery">Photo Gallery</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
