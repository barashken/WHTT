import React from 'react';
import { Typography, Container, Card } from '@mui/material';

const DayDetails = ({ day }) => {
  const { attractions, hotel, restaurants, day: dayTitle } = day;

  const generateMapUrl = (location, name) => {
    const baseUrl = "https://www.google.com/maps/search/?api=1&query=";
    const formattedLocation = location.replace(/\s/g, "+");
    const formattedName = name.replace(/\s/g, "+");
    return baseUrl + formattedLocation + "+" + formattedName;
  };

  const renderTable = (list) => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        {list.map((item, index) => (
          <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
            <td style={{width: '50%', padding: '10px', textAlign: 'left' }}>
            <Typography variant="body1">
              <strong>{item.name}</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ fontSize: '15px' }}>
              {item.description}
            </Typography>
            </td>
            <td style={{width: '40%', padding: '10px', textAlign: 'left' }}>
            <Typography variant="body1">
              <strong>Location:</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ fontSize: '15px' }}>
              {item.location}
            </Typography>
            </td>
            <td style={{width: '70%', textAlign: 'left' }}>
              <a href={generateMapUrl(item.location, item.name)} target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <Container style={{width: '90%', marginTop: '20px', alignContent: 'center' }}>
      <Card elevation={3} style={{width: '100%', padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          {dayTitle}
        </Typography>

        <Typography variant="h6">
          Day Summary:
          <br />
          <Typography variant="body1">
          {day.summary}
          </Typography>
        </Typography>
        <br />
        <Typography variant="h6">Hotel:</Typography>
        <Typography variant="body1">
          <strong>{hotel.name}</strong>
          <br />
          {hotel.description}
          <br />
          <strong>Location:</strong> {hotel.location}
        </Typography>
        <a href={generateMapUrl(hotel.location, hotel.name)} target="_blank" rel="noopener noreferrer">
          View on Google Maps
        </a>
        <br />
        <br />
        <Typography variant="h6">Attractions:</Typography>
        {renderTable(attractions)}
        <br />

        <Typography variant="h6">Restaurants:</Typography>
        {renderTable(restaurants)}
      </Card>
    </Container>
  );
};

export default DayDetails;
