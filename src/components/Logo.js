import React from 'react';
import logo from '../assets/olirena.jpg';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} className="Home-logo" alt="logo" />
      <div className="subtitle">
        Peluquería Unisex
      </div>
    </div> 
  );
}

export default Logo;
