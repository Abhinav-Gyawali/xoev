import React from 'react';
import Slider from 'react-slick';
import '../styling/Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to Our Online Clothing Shop</h1>
        <nav>
          <ul>
            <li><a href="#men">Men</a></li>
            <li><a href="#women">Women</a></li>
            <li><a href="#kids">Kids</a></li>
            <li><a href="#sale">Sale</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <Slider {...settings}>
          <div>
            <img src="https://via.placeholder.com/1500x500" alt="Promotion 1" />
          </div>
          <div>
            <img src="https://via.placeholder.com/1500x500" alt="Promotion 2" />
          </div>
          <div>
            <img src="https://via.placeholder.com/1500x500" alt="Promotion 3" />
          </div>
        </Slider>
      </section>
      <section className="categories">
        <div className="category" id="men">
          <h3>Men's Collection</h3>
          <p>Explore the latest trends in men's fashion.</p>
        </div>
        <div className="category" id="women">
          <h3>Women's Collection</h3>
          <p>Discover the new arrivals in women's fashion.</p>
        </div>
        <div className="category" id="kids">
          <h3>Kids' Collection</h3>
          <p>Find the perfect outfits for your kids.</p>
        </div>
        <div className="category" id="sale">
          <h3>Sale</h3>
          <p>Get the best deals on our sale items.</p>
        </div>
      </section>
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product">
            <img src="https://via.placeholder.com/300" alt="Product 1" />
            <h4>Product 1</h4>
            <p>$29.99</p>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/300" alt="Product 2" />
            <h4>Product 2</h4>
            <p>$39.99</p>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/300" alt="Product 3" />
            <h4>Product 3</h4>
            <p>$49.99</p>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/300" alt="Product 4" />
            <h4>Product 4</h4>
            <p>$59.99</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
