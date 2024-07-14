import React, { useState, useEffect } from 'react';
import '../styling/Category.css';
import NavBar from '../elements/NavBar';

export default function Category() {

  const [filterOpen, setFilterOpen] = useState(false);

  const colorItems = [
    { key: 'Red', color: 'red' },
    { key: 'Blue', color: 'blue' },
    { key: 'Green', color: 'green' },
    { key: 'Yellow', color: 'yellow' },
    { key: 'Purple', color: 'purple' },
    { key: 'Pink', color: 'pink' },
  ]
  const [filters, setFilters] = useState({
    men: false,
    women: false,
    kids: false,
    unisex: false,
    shorts: false,
    dresses: false,
    tops: false,
    pants: false,
    sneakers: false,
    sandals: false,
    't-shirts': false,
    xs: false,
    s: false,
    m: false,
    l: false,
    xl: false,
    xxl: false,
    '3xl': false,
    red: false,
    blue: false,
    green: false,
    yellow: false,
    purple: false,
    pink: false,
  });
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterClick = () => {
    setFilterOpen(true);
    document.querySelector('#filterContainer').classList.add('active');
  };

  const handleCloseFilter = () => {
    setShowFilters(false);
    document.querySelector('#filterContainer').classList.remove('active');
  };

  const handleCheckboxChange = (filter) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
  };
  return (
    <div className="main">
      <NavBar />
      <div className="category">
        <div className="filters-container" id="filterContainer">
          <div className="filters">
            <h2 onClick={handleFilterClick}>Filter</h2>
            <div onClick={handleCloseFilter} id="filter-close">x</div>
            <div className="filter">
              <span className='filter-item' key="men">
                Men
              </span>
              <span className='filter-item' key="women">
                Women
              </span>
              <span className='filter-item' key="kids">
                Kids
              </span>
              <span className='filter-item' key="unisex">
                Unisex
              </span>
            </div>
            <div className="filter">
              <span className='filter-item' key="shorts">
                Pants
              </span>
              <span className='filter-item' key="pants">
                Pants
              </span>
              <span className='filter-item' key="tops">
                Tops
              </span>
              <span className='filter-item' key="dresses">
                Dresses
              </span>
              <span className='filter-item' key="sneakers">
                Sneakers
              </span>
              <span className='filter-item' key="sandles">
                Sandles
              </span>
              <span className='filter-item' key="t-shi  rts">
                T-shirts
              </span>
            </div>
          </div>
          <div className="filters">
            <h2>Price</h2>
            <input type="range" min="50" max="50000" />
          </div>
          <div className="filters">
            <h2>Size</h2>
            <div className="filter">
              <span className='filter-item' key="XS">
                XS
              </span>
              <span className='filter-item' key="S">
                S
              </span>
              <span className='filter-item' key="M">
                M
              </span>
              <span className='filter-item' key="L">
                L
              </span>
              <span className='filter-item' key="XL">
                XL
              </span>
              <span className='filter-item' key="XXL">
                XXL
              </span>
              <span className='filter-item' key="3XL">
                3XL
              </span>
            </div>
          </div>
          <div className="filters">
            <h2>Color</h2>
            <div className="filter">
              {colorItems.map(item => (
                <span
                  key={item.key}
                  className="color-item"
                  style={{ backgroundColor: item.color }}
                >
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="main-container">
        </div>
      </div>
    </div>
  )
}







