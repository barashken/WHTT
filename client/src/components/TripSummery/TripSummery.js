import React, { useState } from 'react';
import { Typography, Container, Paper } from '@mui/material';
import DayDetails from '../DayDetails'; // Assuming you have this component
import './TripSummery.css';
import tripData from '../TripData';

const TripSummery = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (dayIndex) => {
    setSelectedDay(dayIndex);
  };

  const handleCloseDayDetails = () => {
    setSelectedDay(null);
  };

  return (
    <Container maxWidth="md" className="trip-summary-container">
      <Typography variant="h4" gutterBottom>
        Rome Trip Itinerary
      </Typography>

      <div className="days-list">
        {tripData.map((day, index) => (
          <Paper
            key={index}
            className="day-summary"
            onClick={() => handleDayClick(index)}
          >
            <Typography variant="subtitle1">
              Day {index + 1}: {day.summary}
            </Typography>
          </Paper>
        ))}
      </div>

      {selectedDay !== null && (
        <div className="day-details-overlay">
          <div className="day-details-modal">
            <DayDetails day={tripData[selectedDay]} />
            <button
              onClick={handleCloseDayDetails}
              className="close-day-button"
            >
              Close Day
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default TripSummery;
