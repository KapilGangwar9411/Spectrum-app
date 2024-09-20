import React from 'react';
import '../assets/styles.css'; // Import CSS file

const Header = () => {
  return (
    <header id="main-header" className="header">
      <div className="logo-container">
        <img src='/images/black.png' alt="Spectrum Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#work">Work</a></li>
        </ul>
      </nav>
      <button className="join-btn">Join Now</button>
    </header>
  );
}

export default Header;
