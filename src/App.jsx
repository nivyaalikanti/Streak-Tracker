import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
