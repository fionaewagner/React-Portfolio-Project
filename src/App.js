import React from 'react';
import Header from './components/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import AmmenitiesPage from './pages/AmmenitiesPage';
import ContactPage from './pages/ContactPage';
import ReservationPage from './pages/ReservationPage';


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
      </Routes>
      
    </div>
  );
}

export default App;
