import React, { useState, useRef } from 'react';
import TripWindow from './TripWindow';
import { Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

// const galleryStyle = {
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   overflowX: 'auto', // Enable horizontal scrolling
//   position: 'relative',
//   maxWidth: '100%', // Make the gallery responsive
// };

const tripWindowStyle = {
  margin: '10px',
  flex: '0 0 auto', // Ensure trip windows don't shrink
};

const LogoImage = styled('img')({
  height: 60,
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
      id: 6,
      imageSrc: '/budapest.jpg',
      text: 'Budapest Trip',
    },
    // {
    //   id: 7,
    //   imageSrc: '/athens.jpg',
    //   text: 'Athens Trip',
    // }
    // Add more pictures as needed
  ];

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft -= 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft += 500;
  }

  return (
    <div>
      <Typography variant="h2" component="h2" gutterBottom fontFamily="Jura, Arial, sans-serif" style={{ textAlign: 'left', fontWeight: 'bold' }}>
        Discover the world with{' '} 
        <LogoImage src="\wuttlogo2.png"/>
      </Typography>
      <Typography variant="h4" component="h4" gutterBottom fontFamily="Jura, Arial, sans-serif" style={{ textAlign: 'left' }}>
        Don't just visit places - experience them like a local!
        <br />With WUTT's unique trips, you'll get to know the real city, not just the tourist traps.
      </Typography>
      <p style={{ margin: '50px' }}></p>

      <Typography variant="h2" component="h2" gutterBottom fontFamily="Jura, Arial, sans-serif" style={{ textAlign: 'center', fontWeight: 'bold' }}>
        Favorite Trips
      </Typography>
      <div className='relative flex items-center' style={
          {
            display: 'flex', // Use flex display
            flexDirection: 'row', // Arrange items in a row
            alignItems: 'center',
            overflowX: 'auto', // Enable horizontal scrolling
            maxWidth: '100%', // Make the gallery responsive
          }}>
        <MdChevronLeft onClick={slideLeft} size={80} />
        <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'  style={
          {
            display: 'flex', // Use flex display
            flexDirection: 'row', // Arrange items in a row
            alignItems: 'center',
            overflowX: 'auto', // Enable horizontal scrolling
            maxWidth: '100%', // Make the gallery responsive
          }}>
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
        <MdChevronRight onClick={slideRight} size={80} />
      </div>
    </div>
  );
};

export default TripsGallery;