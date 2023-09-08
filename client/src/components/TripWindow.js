import React from 'react';
import { Link } from 'react-router-dom';

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

const TripWindow = ({ imageSrc, inscription, tripDetailsPath }) => {
  return (
    <div style={frameStyle} className="frame">
      <Link to={tripDetailsPath} style={{ textDecoration: 'none'}}>
        <img src={imageSrc} alt="Trip" style={imageStyle} />
        <div className="inscription">{inscription}</div>
      </Link>
    </div>
  );
};

export default TripWindow;
