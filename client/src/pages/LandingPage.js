import React from 'react';
import './LandingPage.css';
import Welcome from '../components/Welcome';
import TopBar from '../components/TopBar';
import TripsGallery from '../components/TripsGallery';

function LandingPage() {
    return (
        <div className="landing-page">
            <TopBar />
            <Welcome />
            <TripsGallery />
        </div>);
}

export default LandingPage;