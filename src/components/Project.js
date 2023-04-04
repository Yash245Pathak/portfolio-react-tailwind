import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'


const Project = () => {
  return <section className='section mb-32' id='work'>
    <div className="container mx-auto text-center lg:text-left">
      <div className='flex flex-col gap-y-10 gap-x-10 lg:flex-row justify-center items-center'>
        <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} className='flex-1 gap-y-12 cursor-pointer'>
          <div>
            <h1 className='text-accent font-primary text-[65px]  leading-tight font-bold mx-auto max-w-max lg:mx-0 mb-4'>Portfolio.</h1>
            <p className='capitalize leading-tight text-[28px] font-secondary font-semibold'>view All My Work:</p>
            <div className='mb-6 my-2 flex justify-between items-center mx-auto max-w-max lg:mx-0 gap-x-8'>
              <button className='btn btn-sm leading-tight mx-auto max-w-max lg:mx-0'><a href="https://github.com/Yash245Pathak" target={'black'}>My Work</a></button>
              <div className='flex gap-x-4 text-[25px]'>
                <a href="https://github.com/Yash245Pathak" target={'_blank'} rel='noreferrer' >
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/yash-pathak-10a6031b6/" target={'_blank'} rel='noreferrer' >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mt-[70px]'>
              <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-150 transition-all duration-500' src={img1} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient font-bold'>Beautiful Landing Page</span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>Project Title</span></div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} className='flex-1 gap-y-12 cursor-pointer'>
          <div className='flex flex-col gap-y-6'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-150 transition-all duration-500' src={img2} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient font-bold'>POPMOVIE.com</span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>Project Title</span></div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-150 transition-all duration-500' src={img3} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient font-bold'>NEWSCATCH.com</span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>Project Title</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Project;
