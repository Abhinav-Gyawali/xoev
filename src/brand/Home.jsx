import React,{useState, useEffect } from 'react';
import NavBar from '../elements/NavBar';
import '../styling/Home.css';
import { ScrollLayout } from '../layouts/Layouts'
import asset7 from "../assets/asset7.jpg";
import asset1 from "../assets/asset1.png"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Header() {
  return (
    <header>
      <img src={asset7} alt="Some asthetic clothes" />
      <div className="header">
        <h1>The New Essentials</h1>
        <p>Styles Redefined</p>
        <button>Shop Now</button>
      </div>
    </header>
  );
}



function Home(props) {
  const navigator = useNavigate();
  return (
    <div className="main">
      <NavBar/>
      <div className="content">
        <Header />
        <ScrollLayout title="Featured" endpoint={process.env.REACT_APP_API_CALLS + '/products'} />
        <div class="hero" onClick={() => navigator('/category')}>
          <img class="background-image" src={asset1} alt="hello"/>
          <h1>Discover more Categories</h1>
        </div>
        <PromotionsSlider/>

        
        
      </div>
    </div>
  )
}


const PromotionsSlider = () => {
  const [promotions, setPromotions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch promotions data from API
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_CALLS + '/promotions')
      .then(response => {
        setPromotions(response.data);
      })
      .catch(error => {
        console.error('Error fetching promotions:', error);
      });
  }, []);

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === promotions.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Auto-swipe every 2 seconds

    return () => clearInterval(interval);
  }, [promotions]);

  // Manually navigate to a specific promotion
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Return if no promotions are available yet
  if (promotions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>Promotions</h2>
    <div className="slider">
      <div className="slides">
        {promotions.map((promotion, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={promotion.image} alt={promotion.title} />
            <div className="overlay">
              <p className="title">{promotion.title}</p>
              <div className="bullets">
                {promotions.map((_, bulletIndex) => (
                  <span
                    key={bulletIndex}
                    className={`bullet ${bulletIndex === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(bulletIndex)}
                  >
                    &#9679;
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        h2{
          font-weight:600;
          margin:20px 0 15px 2px;
        }
        .slider {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius:10px;
          
        }
        .slides {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }
        .slides img {
          width: 100%;
          max-width: 1280px;
          display: block;
          border-radius:10px;
        }
        .slide {
          position: relative;
          min-width: 100%;
          box-sizing: border-box;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          color: white;
          margin-bottom:20px;
        }
        .title {
          font-size: 24px;
          margin-bottom: 20px;
          text-align: center;
        }
        .bullets {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }
        .bullet {
          cursor: pointer;
          font-size: 20px;
          color: gray;
        }
        .bullet.active {
          color: white;
        }
      `}</style>
    </div>
    </>
  );
};
export default Home
