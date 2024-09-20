import React from 'react';
import './assets/styles.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TeamSection from './components/TeamSection';
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <TeamSection />
    </div>
  );
}

export default App;
