import React from 'react';
import TopBar from '../components/TopBar';
import LoginDone from '../components/LoginDone';

const LoginDonePage = () => {
  return (
    <div>
        <TopBar showButtons={false}/>
      <LoginDone />
    </div>
  );
};

export default LoginDonePage;