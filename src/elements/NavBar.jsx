import React, { useState, useEffect } from 'react';
import { FaSearch, FaUser, FaTimes, FaBars, FaShoppingCart } from 'react-icons/fa';
import '../styling/NavBar.css'; // Create a CSS file for styling
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpg';

const NavBar = ({ linksLeft, searchExpand }) => {
  const [search, setSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState();
  
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
        
        <Link to="/"><img class="brand-logo" src={Logo} /></Link>
      </div>
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`} id={linksLeft ? 'links-left' : ''}>
        <Link className="nav-link"  to="/about/">About</Link>
        <Link className="nav-link" to="/category/women">Women</Link>
        <Link className="nav-link" to="/category/men">Men</Link>
        <Link className="nav-link" to="/category/kids">Kids</Link>
      </div>
      <div className="navbar-icons">
        <div className="search-container">
          <div className="search-input">
            <input type="text" value={searchValue} onChange={handleInputChange} id={ !searchExpand && search ? "expanded" : " disabled"} />
          </div>
          <Link onClick={handleSearchButton } className="icon-link">
            {search ? <FaTimes /> : <FaSearch />}
          </Link>
        </div>
        <Link to="/" className="icon-link"><FaUser /></Link>
        <Link to="/" className="icon-link"><FaShoppingCart /></Link>
        <Link onClick={toggleMenu} className="icon-link hamburger-menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;