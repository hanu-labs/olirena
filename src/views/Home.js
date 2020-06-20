import React from 'react';
import logo from '../assets/olirena.jpg';

import { SocialMediaIconsReact } from 'social-media-icons-react';

const Home = () => {
  return (
    <div className="View-Home">
      <img src={logo} className="Home-logo" alt="logo" />
      <div className="subtitle">
        Peluquería Unisex
      </div>
      <div className="social-networks">
        {[
          {
            icon: 'instagram',
            url: 'https://www.instagram.com/olirenapel/'
          },
          {
            icon: 'facebook',
            url: 'https://www.facebook.com/olirena.olirena'
          }

        ].map((icon) => (
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="2"
            borderStyle="solid"
            iconColor="rgba(255,255,255,1)"
            iconSize="5"
            roundness="20%"
            size="40"
            key={icon.icon}
            {...icon}
          />
        ))}
      </div>


    </div>
  );
}

export default Home;
