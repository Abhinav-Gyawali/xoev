import React from 'react';
import '../styling/Footer.css'; // Import custom styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/new-arrivals">New Arrivals</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/sustainability">Sustainability</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li><a href="/support">Customer Support</a></li>
            <li><a href="/shipping">Shipping Information</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} XOEV. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;