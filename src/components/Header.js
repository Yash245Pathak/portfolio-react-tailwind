import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
  return <header className='py-6'>
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <a href="/">
          <img src={logo} className='w-36' alt="" />
        </a>
        <button className='btn btn-sm'><a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=yashpathak245@gmail.com' target={'black'}>Work with me</a></button>
      </div>
    </div>
  </header>
};

export default Header;
