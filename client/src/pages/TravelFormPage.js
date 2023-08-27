import React from 'react';
import TravelForm from '../components/TravelForm';
import TopBar from '../components/TopBar';
import './LandingPage.css';

function TravelFormPage() {
    return (
        <div className="landing-page">
            <TopBar />
            <TravelForm />
        </div>);
}

export default TravelFormPage;