import React, { useState } from 'react';
import { Typography, Button, Box, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Link } from 'react-router-dom';

const TravelForm = () => {
  const [tripStyle, setTripStyle] = useState('dynamic');
  const [tripDuration, setTripDuration] = useState('short');
  const [naturePreference, setNaturePreference] = useState('must');
  const [culturePreference, setCulturePreference] = useState('must');
  const [foodPreference, setFoodPreference] = useState('must');

  const buttonStyle = {
    borderRadius: '63px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Gray color
    color: '#212529', // Text color
    display: 'inline-flex',
    textTransform: 'none', // To prevent uppercase text
    fontWeight: 'bold', // Set font weight if needed
    fontFamily: 'Jura, Arial, sans-serif',
    padding: '15px 45px',
    gap: '10px',
    fontSize: '1.5rem',
  };

  const handleStartTripClick = () => {
    // Here, you can process the selected options before navigating to "/trip-info".
    // You can use the state variables (tripStyle, tripDuration, etc.) to pass the selected options to the next component.
  };

  return (
    <div className="welcome-container">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        p={1}
      >
        <Typography variant="h4" gutterBottom fontFamily="Jura, Arial, sans-serif">
          Fill the form according to your vision...
        </Typography>
        <Box my={1} />

        <FormControl component="fieldset">
          <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif">
            What is your trip style?
          </Typography>
          <RadioGroup
            aria-label="tripStyle"
            name="tripStyle"
            value={tripStyle}
            onChange={(e) => setTripStyle(e.target.value)}
          >
            <FormControlLabel value="dynamic" control={<Radio />} label="Dynamic" />
            <FormControlLabel value="relaxed" control={<Radio />} label="Relaxed" />
          </RadioGroup>
          <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif">
            How many days?
          </Typography>
          <RadioGroup
            aria-label="tripDuration"
            name="tripDuration"
            value={tripDuration}
            onChange={(e) => setTripDuration(e.target.value)}
          >
            <FormControlLabel value="short" control={<Radio />} label="Short" />
            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="long" control={<Radio />} label="Long" />
          </RadioGroup>
          <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif">
            What about nature?
          </Typography>
          <RadioGroup
            aria-label="naturePreference"
            name="naturePreference"
            value={naturePreference}
            onChange={(e) => setNaturePreference(e.target.value)}
          >
            <FormControlLabel value="must" control={<Radio />} label="Must" />
            <FormControlLabel value="optional" control={<Radio />} label="Optional" />
          </RadioGroup>
          <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif">
            What about culture?
          </Typography>
          <RadioGroup
            aria-label="culturePreference"
            name="culturePreference"
            value={culturePreference}
            onChange={(e) => setCulturePreference(e.target.value)}
          >
            <FormControlLabel value="must" control={<Radio />} label="Must" />
            <FormControlLabel value="optional" control={<Radio />} label="Optional" />
          </RadioGroup>
          <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif">
            And some food?
          </Typography>
          <RadioGroup
            aria-label="foodPreference"
            name="foodPreference"
            value={foodPreference}
            onChange={(e) => setFoodPreference(e.target.value)}
          >
            <FormControlLabel value="must" control={<Radio />} label="Must" />
            <FormControlLabel value="optional" control={<Radio />} label="Optional" />
          </RadioGroup>
        </FormControl>
        <Box my={2} />
        <Button
          style={buttonStyle}
          variant="contained"
          component={Link}
          to="/trip-info"
          onClick={handleStartTripClick}
        >
          Let's have fun
        </Button>
      </Box>
    </div>
  );
};

export default TravelForm;
