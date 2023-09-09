
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';

const frameStyle = {
    width: '200px', // Set the desired width for your frames
    height: '300px', // Set the desired height for your frames
    border: '2px solid #000', // Add a border for the frame
    padding: '10px', // Add padding for the image and inscription
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end', // Align inscription to the bottom
    alignItems: 'center', // Center image and inscription horizontally
    textAlign: 'center', // Center text within the frame
    textDecoration: 'none', // Remove link underline
  };
  
  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

const TripWindow = ({ imageUrl, text, onClick, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <Card style={frameStyle}>
      <CardActionArea onClick={handleClick}>
        <img src={imageUrl} alt="Trip" style={imageStyle} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TripWindow;

