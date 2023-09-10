import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { backendUrl } from '../constants';

const frameStyle = {
  width: '250px',
  height: '310px',
  border: '2px solid #000',
  padding: '0',
  position: 'relative',
  textDecoration: 'none',
  borderRadius: '25px', // Add rounded corners
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)', // Add box shadow
  background: 'linear-gradient(135deg, #ff5733, #ffcc00)', // Add gradient background
  transition: 'transform 0.2s ease', // Add smooth transition
  };


const imageStyle = {
  width: '100%', // Stretch image to the full width of the frame
  height: '130%', // Stretch image to the full height of the frame
  objectFit: 'contain', // Maintain aspect ratio and cover the entire frame
};

const textContainerStyle = {
  position: 'absolute', // Position text absolutely within the frame
  bottom: '0', // Position text at the bottom of the frame
  left: '0', // Align text to the left within the frame
  right: '0', // Align text to the right within the frame
  background: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background for readability
  color: 'white', // Text color
  padding: '8px', // Add some padding to the text container
  paddingTop: '1px', // Add padding to the top to move text higher
  textAlign: 'center', // Center text horizontally within the frame
};

const textStyles = {
  margin: '0', // Remove margin for the text
};

const TripWindow = ({ id, imageUrl, text }) => {
  const navigate = useNavigate(); 

  const handleClick = async () => {
    try {
      const response = await fetch(backendUrl + `/get-trip/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Assuming the response contains the trip data
      const tripData = await response.json();
      console.log('Trip data:', tripData);

      if (response.ok) {
        if (tripData) {
          navigate(`/show-trip/${id}`, { state: { data: tripData.response } });
        } else {
          console.error('Trip data is undefined');
        }
      } else {
        console.error('Error:', response.status, tripData);
        navigate(`/error/${response.status}`);      }
    } catch (error) {
      console.error('Error fetching trip data:', error);
      navigate(`/error/${error.response ? error.response.status : '500'}`);
    }
  };

  return (
    <Card style={frameStyle}>
      <CardActionArea onClick={handleClick}>
        <img src={imageUrl} alt="Trip" style={imageStyle} />
        <CardContent style={textContainerStyle}>
          <Typography variant="h4" component="p" style={textStyles} fontFamily="Jura, Arial, sans-serif">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TripWindow;
