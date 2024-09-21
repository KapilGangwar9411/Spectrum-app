import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import TeamSection from './TeamSection';
import JoinNowForm from './JoinNowForm';
import Loader from './Loader';
import Footer from './Footer';

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to open the form modal
  const openForm = () => {
    setIsFormOpen(true);
  };

  // Simulating the loading effect with a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 1000); // You can adjust the timing here

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  // Render the loader until the application is fully loaded
  if (loading) {
    return <Loader />; // Show the loader component if still loading
  }

  return (
    <div>
      <Header openForm={openForm} />
      <Hero openForm={openForm} />
      <JoinNowForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
      <About />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Home;
