import React from 'react';
import { Typography } from '@mui/material';
import SignUp from '../components/SignUp';
import TopBar from '../components/TopBar';

const SignUpPage = () => {
  return (
    <div>
        <TopBar />  
      <SignUp />
    </div>
  );
};

export default SignUpPage;
