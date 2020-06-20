import React from 'react';
import logo from './assets/logo.jpg';
import './App.scss';
import { SocialMediaIconsReact } from 'social-media-icons-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="flex-row">
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


        </header>
    </div>
  );
}

export default App;
