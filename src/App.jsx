
import LandingPage from './pages/LandingPage'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Apply from './pages/Apply';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
  );
}

export default App;