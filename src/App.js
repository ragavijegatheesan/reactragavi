// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import Sidebar from './Sidebar';

import Home from './Home';
import About from './About';
import { Skills } from './Skills';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router  basename="/reactragavi">
      <div className="App">
       
        <div className="content">
          <Sidebar />
          
          {/* Use Routes instead of Route */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          
        </div>
       
      </div>
    </Router>
  );
}

export default App;

