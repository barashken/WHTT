import React from 'react';
import './LandingPage.css';
import Welcome from '../components/Welcome';
import TopBar from '../components/TopBar';

function LandingPage() {
    return (
        <div className="landing-page">
            <TopBar />
            <Welcome />
        </div>);
}

export default LandingPage;