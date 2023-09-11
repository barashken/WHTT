import React, { useState } from 'react';
import { Typography, Button, Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import { backendUrl } from '../constants';
import { TextField, Grid } from '@mui/material';
import './TravelForm.css';


const TravelForm = () => {
  const navigate = useNavigate();
  const [seterrorMessage] = useState('');
  const [setIsInputInvalid] = useState(false);

  
  
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
  
  const handleStartTripClick = async(event) => {
      event.preventDefault();
      const formElement = event.currentTarget;
      const formData = new FormData(formElement);

      const city = formData.get('city');
      const tripStyle = formData.get('tripStyle');
      const days = formData.get('days');
      const nature = formData.get('nature');
      const culture = formData.get('culture');
      const food = formData.get('food');

      try {
        console.log (city)
        console.log (tripStyle)
        console.log (days)
        console.log (nature)
        console.log (culture)
        console.log (food)
        const response = await fetch(backendUrl + '/call-openai-api/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            city,
            tripStyle,
            days,
            nature,
            culture,
            food,
          }),
        });
  
        const responseData = await response.json();
        console.log(responseData); 
  
        if (response.ok) {
          navigate('show-trip', {
            state: {

            },
          });
        }
        else {
          seterrorMessage(responseData.error);
          setIsInputInvalid(true)
        }
  
      } catch (error) {
        console.error('Error:', error);
      }
  };
    

  return (
    <div className="container">

        <Typography variant="h4" gutterBottom fontFamily="Jura, Arial, sans-serif">
          Fill the form according to your vision...
        </Typography>
        <Box my={1} />

        <form onSubmit={handleStartTripClick} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="city"
                name="city"
                required
                fullWidth
                id="city"
                label="City"
                autoFocus
              />
            </Grid>

            <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif">
              What is your trip style?
            </Typography>
            <div className="radio-group-container">
              <RadioGroup
                aria-label="tripStyle"
                name="tripStyle"
                className="radio-group"
              >
                <div className="radio-option">
                  <FormControlLabel
                    value="must"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Must</div>
                        <div className="small-text">I'm looking for a dynamic travel exprerience, exploring multiple destinations and convering a lot of ground</div>
                      </div>
                    }                  />
                  <FormControlLabel
                    value="optional"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Optional</div>
                        <div className="small-text">I'm Seeking a leisurely travel experience, where i can immerse myself in one destination and take my time exploring</div>
                      </div>
                    }  
                  />
                </div>
              </RadioGroup>
            </div>

            <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif">
              How many days?
            </Typography>
            <div className="radio-group-container">
              <RadioGroup
                aria-label="tripDuration"
                name="days"
                className="radio-group"
              >
                <div className="radio-option">
                  <FormControlLabel
                    value="short"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Short</div>
                        <div className="small-text">3-5 days</div>
                      </div>
                    }  
                  />
                  <FormControlLabel
                    value="medium"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Medium</div>
                        <div className="small-text">6-9 days</div>
                      </div>
                    }                    />
                   <FormControlLabel
                    value="long"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Long</div>
                        <div className="small-text">10-16 days</div>
                      </div>
                    }                    />
                </div>
              </RadioGroup>
            </div>

            <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif">
              What about nature?
            </Typography>
            <div className="radio-group-container">
              <RadioGroup
                aria-label="naturePreference"
                name="nature"
                className="radio-group"
              >
                <div className="radio-option">
                  <FormControlLabel
                    value="must"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Must</div>
                        <div className="small-text">Craving an immersive nature experience </div>
                      </div>
                    }                    />
                  <FormControlLabel
                    value="optional"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Optional</div>
                        <div className="small-text">Looking for a break from nature's embrace </div>
                      </div>
                    }                    />
                </div>
              </RadioGroup>
            </div>

            <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif">
              What about culture?
            </Typography>
            <div className="radio-group-container">
              <RadioGroup
                aria-label="culturePreference"
                name="culture"
                className="radio-group"
              >
                <div className="radio-option">
                  <FormControlLabel
                    value="must"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Must</div>
                        <div className="small-text">Eager to indulge in an abundance of cultural delights </div>
                      </div>
                    }                    />
                  <FormControlLabel
                    value="optional"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Optional</div>
                        <div className="small-text">Seeking a cultural break or looking for alternative experience </div>
                      </div>
                    }                    />
                </div>
              </RadioGroup>
            </div>

            <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif">
              And some food?
            </Typography>
            <div className="radio-group-container">
              <RadioGroup
                aria-label="foodPreference"
                name="food"
                className="radio-group"
              >
                <div className="radio-option">
                  <FormControlLabel
                    value="must"
                    control={<Radio />}
                    label={
                      <div>
                        <div>Must</div>
                        <div className="small-text">Craving aculinary adventure to savor diverse flavors across multiple restautants</div>
                      </div>
                    }                    />
                  <FormControlLabel
                    value="optional"
                    control={<Radio />}
                    label="optional"
                  />
                </div>
              </RadioGroup>
            </div>
            
            <Button
                style= {buttonStyle}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Let's have fun!
              </Button>
        </form>
    </div>
  );
};

export default TravelForm;
