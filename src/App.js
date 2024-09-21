import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles.css';
import Home from './components/Home';
import ShortFilms from './components/ShortFilms';
import Events from './components/Events';

function App() {
  return (
    <div>
      <Router>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/short-films" element={<ShortFilms />} />
         <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
