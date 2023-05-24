import React from 'react';
import './Header.css';
// import logo from '../assets/logo.png'; // Replace with the path to your logo image

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Chalet by The Broads</h1>
        {/* <img src={logo} alt={'no'} className='logo'/> */}
      </div>
      <div className='header-content b'>
      <p>Broadside Chalet Park, Chalet 56, Stalham, NR12 9PN</p>
      <p>Tel: 01692 598704</p>
      <p><a href=' mailto: Bookings@chaletbythebroads.co.uk'>Bookings@chaletbythebroads.co.uk</a></p>
      </div>
    </header>
  );
};

export default Header;
