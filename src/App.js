import React from 'react';
import Header from './components/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import AmmenitiesPage from './pages/AmmenitiesPage';
import ContactPage from './pages/ContactPage';
import ReservationPage from './pages/ReservationPage';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import MyReservations from './pages/MyReservations';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='rooms' element={<RoomsPage/>}/>
        <Route path='ammenities' element={<AmmenitiesPage/>}/>
        <Route path='contact' element={<ContactPage/>}/>
        <Route path='reservation' element={<ReservationPage/>}/>
        <Route path='reg' element={<RegisterPage/>}/>
        <Route path='user' element={<MyReservations/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
