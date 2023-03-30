import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
  return <header className='py-6'>
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <a href="/">
          <img src={logo} className='w-36' alt="" />
        </a>
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>
};

export default Header;
