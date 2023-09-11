import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingSpinner = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparent white background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Gray/black color
          padding: '20px',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CircularProgress size={100} thickness={4} style={{ color: '#fff' }} /> {/* White color */}
        <div style={{ marginTop: '10px', fontSize: '1.4rem', color: '#fff' }}>We're building your perfect trip...</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
