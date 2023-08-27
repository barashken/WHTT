import React, { useState } from 'react';
import { Typography, Container, Drawer, List, ListItem, ListItemText, Box, Paper } from '@mui/material';
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
    <Container maxWidth="lg" className="trip-summary-container">
      <Typography variant="h4" gutterBottom>
        Rome Trip Itinerary
      </Typography>

      <Drawer
        variant="permanent"
        anchor="left"
        className="day-drawer"
      >
        <List>
          {tripData.map((day, index) => (
            <ListItem
              key={index}
              button
              onClick={() => handleDayClick(index)}
            >
              <ListItemText primary={`Day ${index + 1}`} />
            </ListItem>
          ))}
        </List>
      </Drawer>

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
