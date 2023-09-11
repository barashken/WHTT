import React from 'react';
import TripWindow from './TripWindow';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles'; // Import styled from @mui/material/styles

const galleryStyle = {
  display: 'flex',
  flexDirection: 'row', // Display frames side by side
  alignItems: 'center', // Center frames vertically
  justifyContent: 'center', // Center frames horizontally
};

const tripWindowStyle = {
  margin: '10px', // Add some margin to create intervals between TripWindows
};

const LogoImage = styled('img')({
  height: 60, // Adjust the height to your desired size
  marginRight: 16,
});

const TripsGallery = () => {
  const pictures = [
    {
      id: 1,
      imageSrc: '/rome.jpg',
      text: 'Rome Trip',
    },
    {
      id: 2,
      imageSrc: '/berlin.jpg',
      text: 'Berlin Trip',
    },
    {
      id: 3,
      imageSrc: '/paris.jpg',
      text: 'Paris Trip',
    },
    {
      id: 4,
      imageSrc: '/london.jpg',
      text: 'London Trip',
    },
    {
      id: 5,
      imageSrc: '/telaviv.jpg',
      text: 'Tel Aviv Trip',
    }
    // Add more pictures as needed
  ];

  return (
    <div>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        fontFamily="Jura, Arial, sans-serif"
        style={{
           textAlign: 'left',
           fontWeight: 'bold',
           }}
      >
        Discover the world with{' '} 
        <LogoImage src="\wuttlogo2.png"/>
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        fontFamily="Jura, Arial, sans-serif"
        style={{ textAlign: 'left' }} // Align text to the left
      >
        Don't just visit places - experience them like a local!
        <br />With WUTT's unique trips, you'll get to know the real city, not just the tourist traps.
      </Typography>
      <p style={{ margin: '60px' }}></p>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        fontFamily="Jura, Arial, sans-serif"
        style={{
           textAlign: 'center',
           fontWeight: 'bold',
          }}
      >
        Favorite Trips 
      </Typography>
      <div style={galleryStyle}>
        {pictures.map((picture) => (
          <div style={tripWindowStyle} key={picture.id}>
            <TripWindow
              id={picture.id}
              imageUrl={picture.imageSrc}
              text={picture.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripsGallery;
