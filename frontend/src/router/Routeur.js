import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import User from '../pages/User';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Routeur = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route component={<User />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routeur;
