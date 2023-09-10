import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TravelFormPage from './pages/TravelFormPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import RegistrationDonePage from './pages/RegistrationDonePage';
import LoginDonePage from './pages/LoginDonePage';
import ShowTripPage from './pages/ShowTripPage';
import ErrorPage from './pages/ErrorPage';
import ErrorBoundary from './components/ErrorBoundary';
import ServerStatusChecker from './components/ServerStatusChecker';

function App() {
  return (
    <Router>
      <ErrorBoundary>
      <ServerStatusChecker />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/registration-done" element={<RegistrationDonePage />} />
          <Route path="/login-done" element={<LoginDonePage />} />
          <Route path="/show-trip/:id" element={<ShowTripPage />} />
          <Route path="/travel-form" element={<TravelFormPage />} />
          <Route path="/error/:errorCode" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage errorCode={404} />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
