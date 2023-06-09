import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto">
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-xl rounded-full max-w-[460px] mx-auto flex justify-between items-center text-3xl px-10 text-white/50'>
          <Link to='home' className='flex w-[60px] h-[60px] cursor-pointer justify-center items-center' activeClass='active' smooth={true} spy={true} offset={-200} >
            <BiHomeAlt />
          </Link>
          <Link to='about' className='flex w-[60px] h-[60px] cursor-pointer justify-center items-center' activeClass='active' smooth={true} spy={true} >
            <BiUser />
          </Link>
          <Link to='work' className='flex w-[60px] h-[60px] cursor-pointer justify-center items-center' activeClass='active' smooth={true} spy={true} >
            <BsBriefcase />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
