import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {


  return (
    <nav className="navigation-bar">
      <ul className='nav-links'>
        <li>
          <Link to='/' className='nav-link'> Home </Link>
        </li>
        <li>
          <Link to='chalet' className='nav-link'> Chalet </Link>
        </li>
        <li>
          <Link to='nearby' className='nav-link'> Nearby </Link>
        </li>
        <li>
          <Link to='contact-form' className='nav-link'> Contact </Link>
        </li>
        <li>
          <Link to='booking' className='nav-link nav-link-booking'> Book Now! </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
