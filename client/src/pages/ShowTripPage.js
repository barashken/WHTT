import React from 'react';
import TripSummery from '../components/TripSummery/TripSummery';
import TopBar from '../components/TopBar';

function ShowTripPage() {
    return (
        <div className="show-trip-page">
            <TopBar />
            <TripSummery />
        </div>);
}

export default ShowTripPage;