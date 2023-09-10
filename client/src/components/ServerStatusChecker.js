import React, { useState, useEffect } from 'react';
import { backendUrl } from '../constants';
import { useNavigate } from 'react-router-dom';

async function checkServerStatus() {
  try {
    const response = await fetch(backendUrl + '/check-alive/', {
      method: 'HEAD', // Use a lightweight HTTP method like HEAD
    });
    console.log(response);
    if (response.status !== 200) {
      throw new Error(`Server returned status ${response.status}`);
    }
    // Server is live
    return true;
  } catch (error) {
    // Server is not live
    return false;
  }
}

function ServerStatusChecker() {
  const [isServerLive, setIsServerLive] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () => {
      const serverLive = await checkServerStatus();
      setIsServerLive(serverLive);
    }, 3000); // Check every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  useEffect(() => {
    // Conditionally navigate to the error page when the server is not live
    if (!isServerLive) {
      navigate('/error/500');
    }
  }, [isServerLive, navigate]);

  // Render null because this component doesn't have any UI
  return null;
}

export default ServerStatusChecker;
