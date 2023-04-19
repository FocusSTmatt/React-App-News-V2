import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';
import TopHeadlines from './componenets/TopHeadlines';
import NewsTest from './componenets/NewsTest';
import Header from './componenets/Header';
import Business from './pages/Business';
import Entertainment from './pages/Entertainment';
import General from './pages/General';
import Health from './pages/Health';
import Science from './pages/Science';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import Headlines from './pages/Headlines';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Headlines />} />
          <Route path="/business" element={<Business />}/> 
          <Route path="/entertainment" element={<Entertainment/>}/> 
          <Route path="/general" element={<General/>}/> 
          <Route path="/health" element={<Health/>}/> 
          <Route path="/Science" element={<Science />}/> 
          <Route path="/sports" element={<Sports/>}/> 
          <Route path="/technology" element={<Technology/>}/> 
        </Routes>
        <Footer />
      </BrowserRouter>
   </>
  )
}

export default App;

