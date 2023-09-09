import React from 'react';
import TripWindow from './TripWindow';
import Typography from '@mui/material/Typography';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column', // Display items vertically
  alignItems: 'center', // Center items horizontally
  textAlign: 'center', // Center text within the container
};

const galleryStyle = {
  display: 'flex',
  flexDirection: 'row', // Display frames side by side
  alignItems: 'center', // Center frames vertically
  justifyContent: 'center', // Center frames horizontally
};

const tripWindowStyle = {
  margin: '10px', // Add some margin to create intervals between TripWindows
};

const TripsGallery = () => {
  const handleTripClick = () => {
    // Handle click logic here
    console.log('Trip clicked!');
  };

  const pictures = [
    {
      id: 1,
      imageSrc: '/rome.jpg',
      text: 'Rome Trip',
      navigateTo: '/show-trip',
    },
    {
      id: 2,
      imageSrc: '/berlin.jpg',
      text: 'Berlin Trip',
      navigateTo: '/show-trip',
    },
    // Add more pictures as needed
  ];

  return (
    <div style={containerStyle} className="picture-gallery">
      <Typography variant="h4" component="h4" gutterBottom fontFamily="Jura, Arial, sans-serif">
        Take a look at our travel gallery:
      </Typography>
      <div style={galleryStyle}>
        {pictures.map((picture) => (
          <div style={tripWindowStyle} key={picture.id}>
            <TripWindow
              imageUrl={picture.imageSrc}
              text={picture.text}
              onClick={handleTripClick}
              navigateTo={picture.navigateTo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripsGallery;
