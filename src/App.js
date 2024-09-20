import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles.css';
import Home from './components/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TeamSection from './components/TeamSection';
import ShortFilms from './components/ShortFilms';
function App() {
  return (
    <div>
      <Router>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/short-films" element={<ShortFilms />} />
        </Routes>
      </Router>
      {/* <Header />
      <Hero />
      <About />
      <TeamSection />
      <ShortFilms /> */}
    </div>
  );
}

export default App;
