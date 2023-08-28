import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TravelFormPage from './pages/TravelFormPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import RegistrationDonePage from './pages/RegistrationDonePage';
import LoginDonePage from './pages/LoginDonePage';
import ShowTripPage from './pages/ShowTripPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/registration-done" element={<RegistrationDonePage />} />
        <Route path="/login-done" element={<LoginDonePage />} />
<<<<<<< HEAD
        <Route path="/show-trip" element={<ShowTripPage />} />
=======
        <Route path="/" element={<LandingPage />} />
        <Route path="/travel-form" element={<TravelFormPage />} />

>>>>>>> 215239d64ad9239856c331a6758e93ac450f97af
      </Routes>
    </Router>
  );
}

export default App;
