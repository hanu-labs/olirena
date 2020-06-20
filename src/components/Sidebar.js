import React, { useState, Fragment } from 'react';
import { useLocation } from 'react-router';
import { Drawer } from '@material-ui/core';
import logo from '../assets/olirena.jpg';
import { Link } from 'react-router-dom';

import routes from '../routes';


const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => setVisible(!visible);

  const toggleButton = (
    <div className="toggle-sidebar" onClick={toggleSidebar}>
      <svg viewBox="0 0 100 80" width="20" height="20">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
    </div>
  )
  return (
    <Fragment>
      <div className="sidebar-placeholder">
        {toggleButton}
      </div>
      <div className={[
        'sidebar',
        visible ? 'visible' : '',
      ].join(' ')}>
        {toggleButton}
        <Link to={'/'}>
          <img className="App-logo" src={logo} />
          <a>
            Peluquería Unisex
          </a>
        </Link>
        <nav>
          {routes.map((route) => (
            <div
              key={route.path}
              className={route.path === location.pathname ? 'active' : ''}>
              <Link to={route.path} onClick={toggleSidebar}>
                {route.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>

    </Fragment>
  );
}

export default Sidebar;
