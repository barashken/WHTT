import React from 'react';
import './LandingPage.css';
import Welcome from '../components/Welcome';
import TopBar from '../components/TopBar';
import TripsGallery from '../components/TripsGallery';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <TopBar />
      <p style={{ margin: '40px' }}></p>
      <Welcome />
      <p style={{ margin: '120px' }}></p>
      <div className="white-background">
        <TripsGallery />
      </div>
    </div>
  );
};

export default LandingPage;
