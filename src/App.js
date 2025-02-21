import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coursepage from './pages/Coursepage';
import Cybersecurity from './pages/Cybersecurity';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Webdevelopment from './pages/Webdevelopment';
import Homepage from './pages/HomePage';
import Navbar from './components/NavBarPage';
import Footer from './components/FooterPage';
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<Coursepage />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/webdevelopment" element={<Webdevelopment />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
