import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import About from './about'; // Import About component
import login from './Login';
import Login from './Login';
import lbrce from './lbrce';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} /> {/* Add About route */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lbrce" element={<lbrce />} />
      </Routes>
    </Router>
  </div>
);
