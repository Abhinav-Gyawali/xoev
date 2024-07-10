import React, { useState, useEffect } from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import '../styling/NavBar.css'; // Create a CSS file for styling
import { Link } from 'react-router-dom';

const NavBar = ({ linksLeft }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#">Mendocino</a>
      </div>
      <div className="navbar-links">
          <Link to="/category/women" key="women">Women</Link>
          <Link to="/category/women" key="women">Women</Link>
          <Link to="/category/women" key="women">Women</Link>
          <Link to="/category/women" key="women">Women</Link>
      </div>
      <div className="navbar-icons">
      <Link to="/" className="icon-link"><FaSearch/></Link>
      <Link to="/" className="icon-link"><FaUser/></Link>
      <Link to="/" className="icon-link"><FaShoppingCart/></Link>
      </div>
    </nav>
  );
};

export default NavBar;