
import LandingPage from './pages/LandingPage'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;