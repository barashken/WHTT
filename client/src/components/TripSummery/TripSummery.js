import React, { useState, useEffect } from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import DayDetails from '../DayDetails';
import './TripSummery.css';
import tripData from '../TripData';
import GoogleMap from '../GoogleMap';


const TripSummery = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [apiError, setApiError] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

  const handleDayClick = (dayIndex) => {
    setSelectedDay(dayIndex);
  };

  const handleNavigation = (direction) => {
    if (direction === 'previous' && selectedDay > 0) {
      setSelectedDay(selectedDay - 1);
    } else if (direction === 'next' && selectedDay < tripData.length - 1) {
      setSelectedDay(selectedDay + 1);
    }
  };

  const handleCloseDayDetails = () => {
    setSelectedDay(null);
  };

  const buttonStyle = {
    borderRadius: '50px',
    display: 'inline-flex',
    textTransform: 'none', // To prevent uppercase text
    fontWeight: 'bold', // Set font weight if needed
    fontFamily: 'Jura, Arial, sans-serif',
    padding: '5px 30px',
    gap: '10px',
    fontSize: '1.5rem',
  };

  return (
    <Container maxWidth="lg" className="trip-summary-container">
      <Typography variant="h4" gutterBottom>
        Rome Trip Itinerary
      </Typography>

      <Box className="day-details">
        <div className="trip-summary-table">
          <table>
            <tbody>
              {tripData.map((day, index) => (
                <tr
                  key={index}
                  className={`day-summary ${selectedDay === index ? 'selected' : ''}`}
                  onClick={() => handleDayClick(index)}
                >
                  <td>Day {index + 1}</td>
                  <td>{day.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Box>

      {selectedDay !== null && (
        <div className="day-details-overlay">
          <div className="day-details-modal">
            <div className="day-details-content">
              <DayDetails day={tripData[selectedDay]} />
            </div>
            <div className="map-container">
              <GoogleMap day={tripData[selectedDay]} />
            </div>
            <div className="navigation-buttons">
              {selectedDay > 0 && (
                <Button
                  onClick={() => handleNavigation('previous')}
                  className="navigation-button previous-button"
                  style={buttonStyle}
                  variant="contained"
                >
                  &lt; Previous
                </Button>
              )}
              <Button
                onClick={handleCloseDayDetails}
                className="navigation-button close-day-button"
                style={buttonStyle}
                variant="contained"
              >
                Close Day
              </Button>
              {selectedDay < tripData.length - 1 && (
                <Button
                  onClick={() => handleNavigation('next')}
                  className="navigation-button next-button"
                  style={buttonStyle}
                  variant="contained"
                >
                  Next &gt;
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default TripSummery;


// import React, { useState, useEffect } from 'react';
// import { Typography, Container, Box, Button } from '@mui/material';
// import { useJsApiLoader, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import Geocode from 'react-geocode';
// import DayDetails from '../DayDetails';
// import './TripSummery.css';

// // Import Axios
// import axios from 'axios';

// const TripSummery = () => {
//   const [selectedDay, setSelectedDay] = useState(null);
//   const [apiError, setApiError] = useState(false);
//   const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
//   const [tripData, setTripData] = useState([]);

//   useEffect(() => {
//     const handleGeocode = async () => {
//       try {
//         const response = await Geocode.fromAddress('Rome, Italy');
//         const { lat, lng } = response.results[0].geometry.location;
//         setMapCenter({ lat, lng });
//       } catch (error) {
//         console.error('Error geocoding city:', error);
//         setApiError(true);
//       }
//     };

//     if (selectedDay !== null) {
//       handleGeocode();
//     }
//   }, [selectedDay]);

//   useEffect(() => {
//     const fetchTripData = async () => {
//       try {
//         // Make an HTTP GET request to your API endpoint
//         const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your API endpoint
//         // Assuming your API returns an array of trip data
//         setTripData(response.data);
//       } catch (error) {
//         console.error('Error fetching trip data:', error);
//         setApiError(true);
//       }
//     };

//     // Call the function to fetch trip data when the component mounts
//     fetchTripData();
//   }, []); // Empty dependency array to fetch data only once when the component mounts

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//   });

//   const handleDayClick = (dayIndex) => {
//     setSelectedDay(dayIndex);
//   };

//   const handleNavigation = (direction) => {
//     if (direction === 'previous' && selectedDay > 0) {
//       setSelectedDay(selectedDay - 1);
//     } else if (direction === 'next' && selectedDay < tripData.length - 1) {
//       setSelectedDay(selectedDay + 1);
//     }
//   };

//   const handleCloseDayDetails = () => {
//     setSelectedDay(null);
//   };

//   const buttonStyle = {
//     borderRadius: '50px',
//     display: 'inline-flex',
//     textTransform: 'none',
//     fontWeight: 'bold',
//     fontFamily: 'Jura, Arial, sans-serif',
//     padding: '5px 30px',
//     gap: '10px',
//     fontSize: '1.5rem',
//   };

//   return (
//     <Container maxWidth="lg" className="trip-summary-container">
//       <Typography variant="h4" gutterBottom>
//         Rome Trip Itinerary
//       </Typography>

//       <Box className="day-details">
//         <div className="trip-summary-table">
//           <table>
//             <tbody>
//               {tripData.map((day, index) => (
//                 <tr
//                   key={index}
//                   className={`day-summary ${selectedDay === index ? 'selected' : ''}`}
//                   onClick={() => handleDayClick(index)}
//                 >
//                   <td>Day {index + 1}</td>
//                   <td>{day.summary}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </Box>

//       {selectedDay !== null && (
//         <div className="day-details-overlay">
//           <div className="day-details-modal">
//             <div className="day-details-content">
//               <DayDetails day={tripData[selectedDay]} />
//             </div>
//             <div className="map-container">
//               <LoadScript
//                 googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
//                 onError={() => setApiError(true)}
//               >
//                 <GoogleMap
//                   mapContainerStyle={{ width: '100%', height: '100%' }}
//                   center={mapCenter}
//                   zoom={10}
//                 >
//                   <Marker position={mapCenter} />
//                 </GoogleMap>
//               </LoadScript>
//               {apiError && (
//                 <div className="error-message">Error loading Google Maps API. Please check your API key.</div>
//               )}
//             </div>
//             <div className="navigation-buttons">
//               {selectedDay > 0 && (
//                 <Button
//                   onClick={() => handleNavigation('previous')}
//                   className="navigation-button previous-button"
//                   style={buttonStyle}
//                   variant="contained"
//                 >
//                   &lt; Previous
//                 </Button>
//               )}
//               <Button
//                 onClick={handleCloseDayDetails}
//                 className="navigation-button close-day-button"
//                 style={buttonStyle}
//                 variant="contained"
//               >
//                 Close Day
//               </Button>
//               {selectedDay < tripData.length - 1 && (
//                 <Button
//                   onClick={() => handleNavigation('next')}
//                   className="navigation-button next-button"
//                   style={buttonStyle}
//                   variant="contained"
//                 >
//                   Next &gt;
//                 </Button>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default TripSummery;
