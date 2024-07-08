import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';

import Login from './Login';
import Register from './Register';
import MyProvider from './MyContext';

const App = () => {
  return (
    <MyProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </MyProvider>
  );
};

export default App;
