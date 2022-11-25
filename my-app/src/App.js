import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom"
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio.js';
import Contact from './components/pages/Contact';


function App() {

  console.log("hello");

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/ReactPortfolio">Home</Link></li>
          <li><Link to="/ReactPortfolio/about">About</Link></li>
          <li><Link to="/ReactPortfolio/portfolio">Portfolio</Link></li>
          <li><Link to="/ReactPortfolio/contact">Contact</Link></li>
        </ul>
      </nav>

    <Routes>
      <Route path="/ReactPortfolio" element={<Home />} />
      <Route path="/ReactPortfolio/about" element={<About />} />
      <Route path="/ReactPortfolio/portfolio" element={<Portfolio />} />
      <Route path="/ReactPortfolio/contact" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
