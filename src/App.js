import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles.css';
import Home from './components/Home';
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
    </div>
  );
}

export default App;
