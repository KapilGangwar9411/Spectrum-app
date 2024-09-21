import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import TeamSection from './TeamSection';
import JoinNowForm from './JoinNowForm';
import Loader from './Loader'; // Import the loader component

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(true); // New state for handling loader

  // Function to open the form modal
  const openForm = () => {
    setIsFormOpen(true);
  };

  // Simulating the loading effect with a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000); // You can adjust the timing here

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  // Render the loader until the application is fully loaded
  if (loading) {
    return <Loader />; // Show the loader component if still loading
  }

  return (
    <div>
      {/* Content will only be displayed after the loader disappears */}
      <Header openForm={openForm} />
      <Hero openForm={openForm} />
      <JoinNowForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
      <About />
      <TeamSection />
    </div>
  );
};

export default Home;
