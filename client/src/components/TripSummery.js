import React, { useState, useEffect } from 'react';
import { Typography, Button, Container } from '@mui/material';
import DayDetails from './DayDetails';
import tripData from './TripData'

const TripSummery = () => {
  // const [tripData, setTripData] = useState([]);

  const [selectedDay, setSelectedDay] = useState(null);

  // useEffect(() => {
  //   fetch('client/public/rome-3-days-new.json')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`Network response was not ok: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setTripData(data))
  //     .catch((error) => console.error('Error loading trip data:', error));
  // }, []);

  const handleDayClick = (dayIndex) => {
    setSelectedDay(dayIndex);
  };

  console.log(tripData);

  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Rome Trip Itinerary
      </Typography>
      <Typography variant="body1">Summary of the Trip:</Typography>
      <Typography variant="body2">{tripData.summary}</Typography>

      <div>
        {tripData.map((day, index) => (
          <Button
            key={index}
            variant="contained"
            color="primary"
            style={{ margin: '5px' }}
            onClick={() => handleDayClick(index)}
          >
            {day.day}
          </Button>
        ))}
      </div>

      {selectedDay !== null && <DayDetails day={tripData[selectedDay]} />}
    </Container>
  );
};

export default TripSummery;
