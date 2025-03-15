import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Footer from './components/Footer';
import Salwar from './components/Salwar';
import Kurtha from './components/Kurtha';
import Lehanga from './components/Lehenga';
import Blouse from './components/Blouse';
import Sarees from './components/Saree';

function HomePage() {
  return (
    <>
      <Collection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/salwar" element={<Salwar />} />
          <Route path="/kurthas" element={<Kurtha />} />
          <Route path="/Lehangas" element={<Lehanga />} />
          <Route path="/Blouses" element={<Blouse />} />
          <Route path="/Sarees" element={<Sarees />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;