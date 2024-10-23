import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Make sure this imports the new Header component
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact/Contact';
import Pricing from './pages/Pricing/Pricing';
import Home from './pages/Home';
import './App.css';


const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header /> {/* This now uses the new Header component */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;