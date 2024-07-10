import React from 'react';
import './App.css';
import Home from './brand/Home';
import About from './brand/About';
import Contact from './brand/Contact';
import NotFound from './error/NotFound';
import NavBar from './elements/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <NavBar/>
      <Routes>
        {/* Define your routes */}
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* Handle 404 - Not Found */}
        <Route element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;