import React,{ useState , useEffect } from 'react';
import NavBar from '../elements/NavBar';
import '../styling/Home.css';
import Section from '../components/Section'
import asset1 from "../assets/asset7.jpg";

function Header() {
  return (
    <header>
    <img src={asset1}/>
    <div className="header">
      <h1>The New Essentials</h1>
      <button>Shop Now</button>
      </div>
    </header>
  );
}



function Home(props) {
  return (
  <div className="main">
  <NavBar/>
  <div className="content">
  <Header/>
  <Section title="Featured" endpoint="https://api.example.com/featured" />
      <Section title="New Arrivals" endpoint="https://api.example.com/new-arrivals" />
      <Section title="Promotions" endpoint="https://api.example.com/promotions" />
    </div>
  </div>
  )
}




export default Home
