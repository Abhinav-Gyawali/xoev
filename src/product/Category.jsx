import React, { useState,useEffect } from 'react';
import '../styling/Category.css';
import NavBar from '../elements/NavBar';
import axios from 'axios';

export default function Category() {
  const [shorting, setShorting] = useState({
    nameBased: '',
    productBased: '',
    priceBased: ''
  });
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
    XS: false,
    S: false,
    M: false,
    L: false,
    XL: false,
    XXL: false,
    '3XL': false,
    red: false,
    blue: false,
    green: false,
    yellow: false,
    purple: false,
    pink: false,
  });
  const colorItems = [
    { key: 'Red', color: 'red' },
    { key: 'Blue', color: 'blue' },
    { key: 'Green', color: 'green' },
    { key: 'Yellow', color: 'yellow' },
    { key: 'Purple', color: 'purple' },
    { key: 'Pink', color: 'pink' },
  ]
  const gender = [
    { key: 'men', value: 'Men' },
    { key: 'women', value: 'Women' },
    { key: 'kids', value: 'Kids' },
    { key: 'unisex', value: 'Unisex' }
  ]
  const productType = [
    { key: 'shorts', value: 'Shorts' },
    { key: 'pants', value: 'Pants' },
    { key: 'dresses', value: 'Dresses' },
    { key: 'tops', value: 'Tops' },
    { key: 'sneakers', value: 'Sneakers' },
    { key: 'sandles', value: 'Sandles' },
    { key: 't-shirts', value: 'T-shirts' }
  ]
  const size = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];


  const handleFilterClick = () => {
    document.querySelector('#filterContainer').classList.add('active');
  };

  const handleCloseFilter = () => {
    document.querySelector('#filterContainer').classList.remove('active');
  };


  const handleFilterItemClick = (itemKey) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [itemKey]: !prevFilters[itemKey]
    }));
  };

  const resetFilters = () => {
    const allFalseFilters = Object.keys(filters).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setFilters(allFalseFilters);

    const allBlankShorting = Object.keys(shorting).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});
    setShorting(allBlankShorting);
  };

  const handleShorting = (category, type) => {
    setShorting((prevShorting) => ({
      ...prevShorting,
      [category]: type
    }));
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
              {gender.map(item => (
                <span className={`filter-item ${filters[item.key] ? 'active' : ''}`} onClick={() => handleFilterItemClick(item.key)} key={item.key}>
                  {item.value}
                </span>
              ))}
            </div>
            <div className="filter">
              {productType.map(item => (
                <span className={`filter-item ${filters[item.key] ? 'active' : ''}`} onClick={() => handleFilterItemClick(item.key)} key={item.key}>
                  {item.value}
                </span>
              ))}

            </div>
          </div>
          <div className="filters">
            <h2>Price</h2>
            <input type="range" min="50" max="50000" />
          </div>
          <div className="filters">
            <h2>Size</h2>
            <div className="filter">
              {size.map(item => (
                <span className={`filter-item ${filters[item] ? 'active' : ''}`} onClick={() => handleFilterItemClick(item)} key={item}>
                  {item}
                </span>
              ))}

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
          <div className="filters">
            <h2>Shorting</h2>
            <div className="filter" id="nameBased">
              <span
                className={`filter-item ${shorting['nameBased'] === 'ascending' ? 'active' : ''}`}
                onClick={() => handleShorting('nameBased', 'ascending')}
              >
                Short by: a-z
              </span>
              <span
                className={`filter-item ${shorting['nameBased'] === 'decending' ? 'active' : ''}`}
                onClick={() => handleShorting('nameBased', 'decending')}
              >
                z-a
              </span>
            </div>
            <div className="filter" id="productBased">
              <span
                className={`filter-item ${shorting['productBased'] === 'fetured' ? 'active' : ''}`}
                onClick={() => handleShorting('productBased', 'fetured')}
              >
                Featured
              </span>
              <span
                className={`filter-item ${shorting['productBased'] === 'newest' ? 'active' : ''}`}
                onClick={() => handleShorting('productBased', 'newest')}
              >
                Newest
              </span>
            </div>
            <div className="filter" id="priceBased">
              <span
                className={`filter-item ${shorting['priceBased'] === 'LH' ? 'active' : ''}`}
                onClick={() => { handleShorting('priceBased', 'LH') }}
              >
                Price: Low - High
              </span>
              <span
                className={`filter-item ${shorting['priceBased'] === 'HL' ? 'active' : ''}`}
                onClick={() => handleShorting('priceBased', 'HL')}
              >
                High - Low
              </span>
            </div>
          </div>
          <div className="filters-buttons">
            <div className="button-container secondary">
              <button onClick={resetFilters}>Reset</button>
            </div>
            <div className="button-container primary">
              <button>Apply</button>
            </div>
          </div>
        </div>
        <div className="main-container">
          <ProductList searchQuery={`${process.env.REACT_APP_API_CALLS}/products`}/>
          </div>
      </div>
    </div>
  )
}

const ProductList = ({searchQuery}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(searchQuery)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the products:', error);
      });
  }, [searchQuery]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-list">
      {loading ? (
        <div className="skeleton-list">
          {[...Array(8)].map((_, index) => (
            <div className="skeleton-item" key={index}></div>
          ))}
        </div>
      ) : (
        products.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <div className="product-rating">{renderStars(product.rating)}</div>
            <p className="product-price">${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};