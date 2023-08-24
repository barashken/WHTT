import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Container } from '@mui/material';

const DayDetails = ({ day }) => {
  const { attractions, hotel, restaurants, day: dayTitle } = day;

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          {dayTitle}
        </Typography>

        <Typography variant="h6">Attractions:</Typography>
        <List>
          {attractions.map((attraction, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={<strong>{attraction.name}</strong>}
                secondary={attraction.description}
              />
              <ListItemText primary={`Location: ${attraction.location}`} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6">Hotel:</Typography>
        <Typography variant="body1">
          <strong>{hotel.name}</strong>
          <br />
          {hotel.description}
          <br />
          Location: {hotel.location}
        </Typography>

        <Typography variant="h6">Restaurants:</Typography>
        <List>
          {restaurants.map((restaurant, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={<strong>{restaurant.name}</strong>}
                secondary={restaurant.description}
              />
              <ListItemText primary={`Location: ${restaurant.location}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default DayDetails;
