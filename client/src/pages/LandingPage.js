import React from 'react';
import './LandingPage.css';
import Welcome from '../components/Welcome';
import TopBar from '../components/TopBar';
import TripsGallery from '../components/TripsGallery';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <TopBar />
            <Welcome />
            <p style={{ margin: '100px' }}></p>
            <TripsGallery />
        </div>);
}

export default LandingPage;