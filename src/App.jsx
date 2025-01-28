import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import QuickQuote from './pages/QuickQuote';
import SecurityServices from './pages/services/SecurityServices';
import InvestigationServices from './pages/services/InvestigationServices';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quick-quote" element={<QuickQuote />} />
            <Route path="/services/security" element={<SecurityServices />} />
            <Route path="/services/investigation" element={<InvestigationServices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;