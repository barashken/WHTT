import React from 'react';
import TripSummery from '../components/TripSummery/TripSummery';
import TopBar from '../components/TopBar';
import { useParams } from 'react-router-dom';

function ShowTripPage() {
    const { id } = useParams();
    return (
        <div className="show-trip-page">
            <TopBar />
            <TripSummery id={id}/>
        </div>);
}

export default ShowTripPage;