import React from 'react';
import NavBar from '../elements/NavBar';
import '../styling/Home.css';
import Section from '../components/Section'
import asset7 from "../assets/asset7.jpg";
import asset1 from "../assets/asset1.png"
import { useNavigate } from 'react-router-dom';


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
      <NavBar />
      <div className="content">
        <Header />
        <Section title="Featured" endpoint={process.env.REACT_APP_API_CALLS + '/products'} />
        <Section title="New Arrivals" endpoint={process.env.REACT_APP_API_CALLS + '/products'} />
        <Section title="Promotions" endpoint={process.env.REACT_APP_API_CALLS + '/products'} />
        <div class="hero" onClick={() => navigator('/category')}>
          <img class="background-image" src={asset1} alt="hello"/>
          <h1>Discover more Categories</h1>
        </div>
        <Section title="Featured" endpoint={process.env.REACT_APP_API_CALLS + '/products'} />
        <Section title="New Arrivals" endpoint={process.env.REACT_APP_API_CALLS + '/products'} />
        <Section title="Promotions" endpoint={process.env.REACT_APP_API_CALLS + '/products'} />
      </div>
    </div>
  )
}




export default Home
