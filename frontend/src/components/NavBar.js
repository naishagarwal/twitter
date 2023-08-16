import React from 'react';
import SingingforSmilesLogo from '../img/SingingforSmileslogo.jpg';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css'

function NavBar() {
  return (
    <div className='navigation'>
      <div className='nav'>
        <NavLink to='/feed' className='link'> 
          Feed
        </NavLink>

        <NavLink to='/profile' className='link'>
          Profile
        </NavLink>
      </div>
      <div className='hack'>
        <a href='https://hack.uclaacm.com/' target='_blank' rel='noreferrer'>
          <img src={SingingforSmilesLogo} id='lightbulb' alt='SFS Logo' />
        </a>
      </div>
    </div>
  );
}

export default NavBar;