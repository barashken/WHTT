import React, { useEffect, useRef, useState } from 'react';

const GoogleMap = () => {
    const mapRef = useRef(null);
    const searchBoxRef = useRef(null);
    const [marker, setMarker] = useState(null); // Store the marker in a state variable

    useEffect(() => {
        // Initialize the map
        const mapOptions = {
            center: { lat: 32.0853, lng: 34.7818 }, // Tel Aviv coordinates
            zoom: 12,
        };
        const map = new window.google.maps.Map(mapRef.current, mapOptions);
        // const newMarker = new window.google.maps.Marker({position : { lat: 32.0853, lng: 34.7818 }, map: map});
        // setMarker(newMarker);
    }, []);

    return (
        <div>
            <div ref={mapRef} style={{ width: '100%', height: '850px', marginTop: '8px' }} />
        </div>
    );
};

export default GoogleMap;