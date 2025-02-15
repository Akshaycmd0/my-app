import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coursepage from './pages/Coursepage';
import Cybersecurity from './pages/Cybersecurity';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Webdevelopment from './pages/Webdevelopment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="course" element={<Coursepage />} />
        <Route path="cybersecurity" element={<Cybersecurity/>} />
        <Route path="webdevelopment" element={<Webdevelopment/>} />
      </Routes>
    </Router>
  );
}

export default App;
