import React from 'react';
import logo from '../assets/logo.jpg';

const LoadingScreen = () => (
  <div
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh'
    }}
  >
    <img style={{ height: '75px' }} src={logo} alt="Loading..." />
  </div>
);

export default LoadingScreen;
