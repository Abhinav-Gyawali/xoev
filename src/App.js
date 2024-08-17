import React from 'react';
import './App.css';
import Home from './brand/Home';
import About from './brand/About';
import Contact from './brand/Contact';
import NotFound from './error/NotFound';
import Category from './product/Category';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route exact path="/" element={<Home/>} />
        <Route path="/about/" element={<About/>} />
        <Route path="/contact/" element={<Contact/>} />
        <Route path="/category/" element={<Category/>} />
        {// <Route path="/checkout/" element={<CheckoutForm/>} />
        }
        {/* Handle 404 - Not Found */}
  {/*<Route path="*" element={<NotFound/>} />*/}
      </Routes>
    </Router>
  );
};

export default App;
