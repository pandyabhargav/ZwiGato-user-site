import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Baner from './coponent/Banner1/Baner';
import Signup from './coponent/Singin/Singin';
import Header from './coponent/Header/Header';
import Foter from './coponent/Foter/Foter';
import './App.css';
import Login from './coponent/Login/Login';
import Contact from './coponent/Contact/Contact';
import Restorantlisting from './coponent/Resturent-listing/Restorant-listing';
import Error from './coponent/Error-page/Error';
import Emptycart from './coponent/Empty-cart/Empty-cart';
import Otp from './coponent/Otp/Otp';
import Faq from './coponent/Faq/Faq';
import Menugrid from './coponent/Menu-grid/Menu-grid';
import Menulisting from './coponent/Menu-listing/Menu-listing';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Baner />} />
        <Route path='/singin'  element={<Signup />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Resturant-listing' element={<Restorantlisting/>} />
        <Route path='/Whislesheet' element={<Restorantlisting/>} />
        <Route path='/error' element={<Error/>} />
        <Route path='/Empty-cart' element={<Emptycart/>} />
        <Route path='/Otp' element={<Otp/>} />
        <Route path='/Faq' element={<Faq/>} />
        <Route path='/Menu-grid' element={<Menugrid/>} />
        <Route path='/Menu-listing' element={<Menulisting/>} />
      </Routes>
      <Foter />
    </Router>
  );
}

export default App;
