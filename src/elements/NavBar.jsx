import React, { useState, useEffect } from 'react';
import { FaSearch, FaUser, FaTimes, FaBars, FaShoppingCart } from 'react-icons/fa';
import '../styling/NavBar.css'; // Create a CSS file for styling
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpg';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = ({ linksLeft, searchExpand }) => {
  const [search, setSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState();
  const { loginWithRedirect } = useAuth0();
  useEffect(() => {
    setSearch(searchExpand);
  }, [searchExpand]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleSearchButton = ()=> {
    setSearch(!search);
    if(search){
      setSearchValue('');
    }
  }
  const handleInputChange =(event)=>{
    setSearchValue(event.target.value);
  }
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        
        <Link to="/"><img class="brand-logo" alt="XOEV" src={Logo} /></Link>
      </div>
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`} id={linksLeft ? 'links-left' : ''}>
        <Link className="nav-link"  to="/about/">About</Link>
        <Link className="nav-link" to="/category/women">Women</Link>
        <Link className="nav-link" to="/category/men">Men</Link>
        <Link className="nav-link" to="/category/kids">Kids</Link>
        <a target="_blank" href="xoev.vercel.app/app">Open In App</a>
      </div>
      <div className="navbar-icons">
        <div className="search-container">
          <div className="search-input">
            <input type="text" value={searchValue} onChange={handleInputChange} id={ searchExpand || search ? "expanded" : " disabled"} />
          </div>
          <Link onClick={handleSearchButton } className="icon-link">
            {search ? <FaTimes /> : <FaSearch />}
          </Link>
        </div>
        <span className="icon-link" onClick={loginWithRedirect}><FaUser /></span>
        <Link to="/user/cart" className="icon-link"><FaShoppingCart /></Link>
        <Link onClick={toggleMenu} className="icon-link hamburger-menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
