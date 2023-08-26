import React from 'react';
import { Typography, List, ListItem, ListItemText, Container, Card } from '@mui/material';

const DayDetails = ({ day }) => {
  const { attractions, hotel, restaurants, day: dayTitle } = day;

  const generateMapUrl = (location, name) => {
    const baseUrl = "https://www.google.com/maps/search/?api=1&query=";
    const formattedLocation = location.replace(/\s/g, "+");
    const formattedName = name.replace(/\s/g, "+");
    return baseUrl + formattedLocation + "+" + formattedName;
  };

  const renderList = (list, type) => (
    <List>
      {list.map((item, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={<strong>{item.name}</strong>}
            secondary={item.description}
          />
          <ListItemText primary={`Location: ${item.location}`} />
          <a href={generateMapUrl(item.location, item.name)} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Card elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          {dayTitle}
        </Typography>

        <Typography variant="h6">
          Day Summary:
          <br />
          {day.summary}
        </Typography>

        <Typography variant="h6">Hotel:</Typography>
        <Typography variant="body1">
          <strong>{hotel.name}</strong>
          <br />
          {hotel.description}
          <br />
          Location: {hotel.location}
        </Typography>
        <a href={generateMapUrl(hotel.location, hotel.name)} target="_blank" rel="noopener noreferrer">
            View on Google Maps
        </a>

        <Typography variant="h6">Attractions:</Typography>
        {renderList(attractions, "Attraction")}

        <Typography variant="h6">Restaurants:</Typography>
        {renderList(restaurants, "Restaurant")}
      </Card>
    </Container>
  );
};

export default DayDetails;
