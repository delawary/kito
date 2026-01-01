import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import CltCellUnit from './pages/CltCellUnit.jsx';
import Investors from './pages/Investors.jsx';
import Guests from './pages/Guests.jsx';
import './styles/global.css';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clt-cell-unit" element={<CltCellUnit />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/guests" element={<Guests />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
