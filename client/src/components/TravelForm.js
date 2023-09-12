import React, { useState, useEffect } from 'react';
import { Typography, Button, Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { backendUrl } from '../constants';
import { TextField, Grid } from '@mui/material';
import './TravelForm.css';
import LoadindSpinner from './LoadingSpinner';

const TravelForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const [cityQuery, setCityQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // State variables to track selections and errors for each radio group
  const [styleSelection, setStyleSelection] = useState('');
  const [daysSelection, setDaysSelection] = useState('');
  const [natureSelection, setNatureSelection] = useState('');
  const [cultureSelection, setCultureSelection] = useState('');
  const [foodSelection, setFoodSelection] = useState('');

  // State variables to store error messages for each radio group
  const [styleError, setStyleError] = useState('');
  const [daysError, setDaysError] = useState('');
  const [natureError, setNatureError] = useState('');
  const [cultureError, setCultureError] = useState('');
  const [foodError, setFoodError] = useState('');

  const buttonStyle = {
    borderRadius: '63px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Gray color
    color: '#212529', // Text color
    display: 'inline-flex',
    textTransform: 'none', // To prevent uppercase text
    fontWeight: 'bold', // Set font weight if needed
    fontFamily: 'Jura, Arial, sans-serif',
    padding: '15px 45px',
    gap: '100px',
    fontSize: '1.5rem',
    align: 'center',
    width: '600px',

  };

  const handleStartTripClick = async (event) => {
    event.preventDefault();

    // Check if any radio group is not selected
    if (!styleSelection || !daysSelection || !natureSelection || !cultureSelection || !foodSelection) {
      setErrorMessage('Please select an option for each category.');
      setIsInputInvalid(true);

      // Set individual error messages for missing selections
      if (!styleSelection) setStyleError('Trip style is required.');
      if (!daysSelection) setDaysError('Number of days is required.');
      if (!natureSelection) setNatureError('Nature preference is required.');
      if (!cultureSelection) setCultureError('Culture preference is required.');
      if (!foodSelection) setFoodError('Food preference is required.');

      return;
    }

    // Clear any previous error messages
    setErrorMessage('');
    setIsInputInvalid(false);
    setLoading(true);

    const city = cityQuery;
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    // const city = formData.get('city');

    try {
      console.log(city);
      console.log(styleSelection);
      console.log(daysSelection);
      console.log(natureSelection);
      console.log(cultureSelection);
      console.log(foodSelection);

      const response = await fetch(backendUrl + '/call-openai-api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          city,
          style: styleSelection,
          days: daysSelection,
          nature: natureSelection,
          culture: cultureSelection,
          food: foodSelection,
        }),
      });

      const tripData = await response.json();
      console.log(tripData);

      if (response.ok) {
        if (tripData) {
          navigate(`/show-trip/${tripData.response["trip-id"]}`, { state: { data: tripData.response } });
        } else {
          console.error('Trip data is undefined');
        }
      } else {
        console.error('Error:', response.status, tripData);
        setErrorMessage(tripData.error);
        setIsInputInvalid(true);
        navigate(`/error/${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById('city'),
      {
        types: ['(cities)'],
      }
    );

    // Listen for place selection
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.formatted_address) {
        setCityQuery(place.formatted_address);
      }
    });
  }, []);

  return (
    <div>
      {loading && <LoadindSpinner />}
      
      <Typography variant="h4" gutterBottom fontFamily="Jura, Arial, sans-serif" align='center'>
        Fill the form according to your vision...
      </Typography>
      <Box my={1} />

      <form onSubmit={handleStartTripClick} sx={{ mt: 3 }} align='center'>
        <Grid item xs={12} sm={6} align='center'> 
        <TextField
            autoComplete="off"
            name="city"
            required
            id="city"
            label="Where do you want to travel? (City)"
            autoFocus
            value={cityQuery}
            align='center'
            style={{ width: '600px' }}
            onChange={(e) => setCityQuery(e.target.value)}
          />
        </Grid>
        <br />
        <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif" align='center'>
          What is your trip style?
        </Typography>
        {/* <div className="radio-group-container"> */}
          <RadioGroup
            aria-label="style"
            name="style"
            className="radio-group"
            align='center'
            value={styleSelection}
            onChange={(e) => {
              setStyleSelection(e.target.value);
              setStyleError('');
            }}>
            <div className="radio-option">
                  <FormControlLabel
                    value="Dynamic"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Dynamic</div>
                        <div className="small-text">I'm looking for a dynamic travel exprerience, exploring multiple destinations and convering a lot of ground</div>
                      </div>
                    }                 
                  />
                  <FormControlLabel
                    value="Relaxed"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Relaxed</div>
                        <div className="small-text">I'm Seeking a leisurely travel experience, where i can immerse myself in one destination and take my time exploring</div>
                      </div>
                    }  
                  />
                </div>
          </RadioGroup>
        {/* </div> */}
        {styleError && (
          <Typography variant="body2" color="error" gutterBottom>
            {styleError}
          </Typography>
        )}
        <br />
            <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif" align='center'>
              How many days?
            </Typography>
            {/* <div className="radio-group-container"> */}
              <RadioGroup
                aria-label="tripDuration"
                name="days"
                className="radio-group"
                align='center'
                value={daysSelection}
                onChange={(e) => {
                  setDaysSelection(e.target.value);
                  setDaysError('');
                }}>
                <div className="radio-option">
                  <FormControlLabel
                    value="short"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Short</div>
                        <div className="small-text">1-3 days</div>
                      </div>
                    }  
                  />
                  <FormControlLabel
                    value="medium"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Medium</div>
                        <div className="small-text">4-6 days</div>
                      </div>
                    }                    />
                   <FormControlLabel
                    value="long"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Long</div>
                        <div className="small-text">7-10 days</div>
                      </div>
                    }                    />
                </div>
              </RadioGroup>
            {/* </div> */}
            {daysError && (
              <Typography variant="body2" color="error" gutterBottom>
                {daysError}
              </Typography>
            )}
          <br />
            <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif" align='center'>
              What about nature?
            </Typography>
            {/* <div className="radio-group-container"> */}
              <RadioGroup
                aria-label="naturePreference"
                name="nature"
                className="radio-group"
                align='center'
                value={natureSelection}
                onChange={(e) => {
                  setNatureSelection(e.target.value);
                  setNatureError('');
                }}
              >
                <div className="radio-option">
                  <FormControlLabel
                    value="Must"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Must</div>
                        <div className="small-text">Craving an immersive nature experience </div>
                      </div>
                    }                    />
                  <FormControlLabel
                    value="Optional"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Optional</div>
                        <div className="small-text">Looking for a break from nature's embrace </div>
                      </div>
                    }                    />
                </div>
              </RadioGroup>
            {/* </div> */}
            {natureError && (
              <Typography variant="body2" color="error" gutterBottom>
                {natureError}
              </Typography>
            )}
          <br />  
            <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif" align='center'>
              What about culture?
            </Typography>
            {/* <div className="radio-group-container"> */}
              <RadioGroup
                aria-label="culturePreference"
                name="culture"
                className="radio-group"
                align='center'
                value={cultureSelection}
                onChange={(e) => {
                  setCultureSelection(e.target.value);
                  setCultureError('');
                }}
              >
                <div className="radio-option">
                  <FormControlLabel
                    value="Must"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Must</div>
                        <div className="small-text">Eager to indulge in an abundance of cultural delights </div>
                      </div>
                    }                    />
                  <FormControlLabel
                    value="Optional"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Optional</div>
                        <div className="small-text">Seeking a cultural break or looking for alternative experience </div>
                      </div>
                    }                    />
                </div>
              </RadioGroup>
            {/* </div> */}
            {cultureError && (
              <Typography variant="body2" color="error" gutterBottom>
                {cultureError}
              </Typography>
            )}
          <br />
            <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif" align='center'>
              And some food?
            </Typography>
            {/* <div className="radio-group-container"> */}
              <RadioGroup
                aria-label="foodPreference"
                name="food"
                className="radio-group"
                align='center'
                value={foodSelection}
                onChange={(e) => {
                  setFoodSelection(e.target.value);
                  setFoodError('');
                }}
              >
                <div className="radio-option">
                  <FormControlLabel
                    value="Must"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Must</div>
                        <div className="small-text">Craving aculinary adventure to savor diverse flavors across multiple restautants</div>
                      </div>
                    }                    />
                  <FormControlLabel
                    value="Optional"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Optional</div>
                        <div className="small-text">Selective gastronomic exploration preferred</div>
                      </div>
                    }   
                  />
                </div>
              </RadioGroup>
            {/* </div> */}
            {foodError && (
              <Typography variant="body2" color="error" gutterBottom>
                {foodError}
              </Typography>
            )}
          <br />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Button
          style={buttonStyle}
          type="submit"
          variant="contained"
          align='center'
          sx={{ mt: 3, mb: 2 }}
        >
          Let's have fun!
        </Button>
        </div>
      </form>

      {isInputInvalid && (
        <Typography variant="body2" color="error" gutterBottom align='center'>
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};
            

export default TravelForm;
