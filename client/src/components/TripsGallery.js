import React from 'react';
import { Outlet, Route } from 'react-router-dom';
import TripWindow from './TripWindow';
import ShowTripPage from '../pages/ShowTripPage';

const galleryStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack frames vertically
    alignItems: 'center', // Center frames horizontally
  };

const TripsGallery = () => {
  const pictures = [
    {
      id: 1,
      imageSrc: '/public/rome.jpg',
      inscription: 'Rome Trip',
    },
    {
      id: 2,
      imageSrc: '/public/berlin.jpg',
      inscription: 'Berlin Trip',
    },
    // Add more pictures as needed
  ];

  return (
    <Outlet>
      <Route exact path="/">
        <div style={galleryStyle} className="picture-gallery">
          {pictures.map((picture) => (
            <TripWindow
              key={picture.id}
              imageSrc={picture.imageSrc}
              inscription={picture.inscription}
              tripDetailsPath={`/show-trip/${picture.id}`}
            />
          ))}
        </div>
      </Route>
      <Route path="/show-trip/:id" component={ShowTripPage} />
    </Outlet>
  );
};

export default TripsGallery;
