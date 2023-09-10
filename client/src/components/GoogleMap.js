import React, { useEffect, useRef } from 'react';
import Geocode from 'react-geocode';

const GoogleMap = ({ day }) => {
    const mapRef = useRef(null);
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

    useEffect(() => {
        const mapOptions = {
        center: { lat: 41.9028, lng: 12.4964 }, // Rome coordinates
        zoom: 12,
        };
        const map = new window.google.maps.Map(mapRef.current, mapOptions);
        const geocoder = new window.google.maps.Geocoder();
        const infowindow = new window.google.maps.InfoWindow(); // Create a single InfoWindow for all markers

        // Function to create a marker with a specified color
        const createMarker = (position, details, color) => {
            const marker = new window.google.maps.Marker({
                position: position,
                map,
                icon: {
                  path: window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                  fillColor: color,
                  fillOpacity: 1,
                  strokeWeight: 1,
                  scale: 5, // Adjust the scale as needed
                },
            });

            marker.addListener('click', () => {
                // Set the InfoWindow content to display details
                infowindow.setContent(`<div style="color: ${color};">${details}</div>`);
                infowindow.setOptions({ maxWidth: 200 });
                infowindow.open(map, marker);
              });
        
              return marker;
        };
        
        // Function to geocode a location and create a marker for it
        const geocodeAndCreateMarker = async (name, address, color) => {
            geocoder.geocode({ 'address': name}, function(results, status) {
            if (status == 'OK') {
                const location = results[0].geometry.location;
                const details = `<div><strong>${name}</strong><br>${address}</div>`;
                createMarker(location, details, color);
            }
            else {
                geocoder.geocode({ 'address': address}, function(results, status) {
                if (status == 'OK') {
                    const location = results[0].geometry.location;
                    const details = `<div><strong>${name}</strong><br>${address}</div>`;
                    createMarker(location, details, color);
                }
                else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
                });
            }
            });
        }

        // Create hotel marker (blue)
        if (day.hotel && day.hotel.location) {
            geocodeAndCreateMarker(day.hotel.name, day.hotel.location, 'blue');
        }

        // Create attraction markers (green)
        day.attractions.forEach((attraction) => {
            if (attraction.location) {
                geocodeAndCreateMarker(attraction.name, attraction.location, 'green');
            }
        });

        // Create restaurant markers (red)
        day.restaurants.forEach((restaurant) => {
            if (restaurant.location) {
                geocodeAndCreateMarker(restaurant.name, restaurant.location, 'red');
            }
        });
});

return (
    <div>
      <div ref={mapRef} style={{ width: '100%', height: '850px', marginTop: '8px' }} />
    </div>
  );
};

export default GoogleMap;
