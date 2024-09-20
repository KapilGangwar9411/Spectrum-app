import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import TeamSection from './TeamSection';
import JoinNowForm from './JoinNowForm';

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  return (
    <div>
      <Header openForm={openForm} />
      <Hero openForm={openForm} />
      <JoinNowForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
      <About />
      <TeamSection />
    </div>
  );
};

export default Home;
