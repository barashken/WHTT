import React, { useState } from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import DayDetails from '../DayDetails'; // Assuming you have this component
import './TripSummery.css';
import tripData from '../TripData';

const TripSummery = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (dayIndex) => {
    setSelectedDay(dayIndex);
  };

  const handleNavigation = (direction) => {
    if (direction === 'previous' && selectedDay > 0) {
      setSelectedDay(selectedDay - 1);
    } else if (direction === 'next' && selectedDay < tripData.length - 1) {
      setSelectedDay(selectedDay + 1);
    }
  };

  const handleCloseDayDetails = () => {
    setSelectedDay(null);
  };

  const buttonStyle = {
    borderRadius: '50px',
        display: 'inline-flex',
        textTransform: 'none', // To prevent uppercase text
        fontWeight: 'bold', // Set font weight if needed
        fontFamily: 'Jura, Arial, sans-serif',
        padding: '5px 30px',
        gap: '10px',
        fontSize: '1.5rem',
  };

  return (
    <Container maxWidth="lg" className="trip-summary-container">
      <Typography variant="h4" gutterBottom>
        Rome Trip Itinerary
      </Typography>

      <Box className="day-details">
        <div className="trip-summary-table">
          <table>
            <tbody>
              {tripData.map((day, index) => (
                <tr
                  key={index}
                  className={`day-summary ${selectedDay === index ? 'selected' : ''}`}
                  onClick={() => handleDayClick(index)}
                >
                  <td>Day {index + 1}</td>
                  <td>{day.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Box>

      {selectedDay !== null && (
        <div className="day-details-overlay">
          <div className="day-details-modal">
            <div className="day-details-content">
              <DayDetails day={tripData[selectedDay]} />
            </div>
            <div className="map-container">
              <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                  mapContainerStyle={{ width: '100%', height: '100%' }}
                  center={{ lat: 44 /* Latitude */, lng: 44 /* Longitude */ }}
                  zoom={10}
                >
                  <Marker position={{ lat: 44 /* Latitude */, lng: 44 /* Longitude */ }} />
                </GoogleMap>
              </LoadScript>
            </div>
            <div className="navigation-buttons">
              {selectedDay > 0 && (
                <Button
                  onClick={() => handleNavigation('previous')}
                  className="navigation-button previous-button"
                  style={buttonStyle}
                  variant="contained"
                >
                  &lt; Previous
                </Button>
              )}
              <Button
                onClick={handleCloseDayDetails}
                className="navigation-button close-day-button"
                style={buttonStyle}
                variant="contained"
              >
                Close Day
              </Button>
              {selectedDay < tripData.length - 1 && (
                <Button
                  onClick={() => handleNavigation('next')}
                  className="navigation-button next-button"
                  style={buttonStyle}
                  variant="contained"
                >
                  Next &gt;
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default TripSummery;
