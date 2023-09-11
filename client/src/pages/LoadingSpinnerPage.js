import React, { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const LoadingSpinnerPage = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  const handleShowSpinnerClick = () => {
    setShowSpinner(true);

    // Simulate a delay before hiding the spinner (you can replace this with your actual API request)
    setTimeout(() => {
      setShowSpinner(false);
    }, 3000); // 3 seconds delay (adjust as needed)
  };

  return (
    <div>
      <h1>Loading Spinner Page</h1>
      <p>Click the button below to showcase the loading spinner.</p>
      
      <button onClick={handleShowSpinnerClick}>Show Loading Spinner</button>

      {showSpinner && <LoadingSpinner />}
    </div>
  );
};

export default LoadingSpinnerPage;
