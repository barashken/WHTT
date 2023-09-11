import React, { useState } from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import DayDetails from '../DayDetails';
import './TripSummery.css';
// import tripData from '../TripData';
import GoogleMap from '../GoogleMap';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles'; // Import styled from @mui/material/styles

const TripSummery = ({ id }) => {
  console.log('TripSummery id:', id);
  const location = useLocation();
  const { data } = location.state || {};
  const tripDataReq = data['trip-req'];
  const tripData = data['trip-data'];
  const [selectedDay, setSelectedDay] = useState(null);

  const LogoImage = styled('img')({
    height: 20, // Adjust the height to your desired size
    marginRight: 16,
  });

  const LogoItem = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginRight: '25px', // Adjust the space between logos and inscriptions
  });

  const LogoContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

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
      <Typography variant="h3" gutterBottom fontFamily="Jura, Arial, sans-serif">
        Summery of your trip
      </Typography>
      <Typography variant="h4" gutterBottom fontFamily="Jura, Arial, sans-serif">
        Like you asked:
      </Typography>
      <Typography variant="h4" gutterBottom fontFamily="Jura, Arial, sans-serif">
        Trip to <bold>{tripDataReq.city}, {tripDataReq.country}</bold>
      </Typography>
      <br />
      <LogoContainer>
        <LogoItem>
          <LogoImage src="\target.png" />
          <Typography variant="h6" gutterBottom fontFamily="Jura, Arial, sans-serif">
            Trip style: {tripDataReq.style}  
          </Typography>
        </LogoItem>
        <LogoItem>
          <LogoImage src="\suncloundmount.png" />
          <Typography variant="h6" gutterBottom fontFamily="Jura, Arial, sans-serif">
            Nature: {tripDataReq.nature}   
          </Typography>
        </LogoItem>
        <LogoItem>
          <LogoImage src="\custle.png" />
          <Typography variant="h6" gutterBottom fontFamily="Jura, Arial, sans-serif">
            Culture: {tripDataReq.culture}   
          </Typography>
        </LogoItem>
        <LogoItem>
          <LogoImage src="\forkknife.png" />
          <Typography variant="h6" gutterBottom fontFamily="Jura, Arial, sans-serif">
            Food: {tripDataReq.food}  
          </Typography>
        </LogoItem>
      </LogoContainer>

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
              <GoogleMap day={tripData[selectedDay]} />
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
