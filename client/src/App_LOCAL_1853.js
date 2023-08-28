import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
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
        <Route path="/show-trip" element={<ShowTripPage />} />
      </Routes>
    </Router>
  );
}

export default App;
