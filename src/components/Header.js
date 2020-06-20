import React from 'react';
import { useHistory } from 'react-router';
import logo from '../assets/olirena.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  return (
    <header className="App-header">
      <Link to={'/'}>
        <img className="App-logo" src={logo} />
      </Link>
      <nav>
      </nav>
    </header>
  );
}

export default Header;
