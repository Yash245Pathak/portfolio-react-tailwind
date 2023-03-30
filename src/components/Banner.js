import React from 'react';
import mypic from '../assets/yashPic.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[76vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center justify-center items-center'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Yash <span>Pathak</span> </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold leading-[1]'>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Front-End Developer',
                  2000,
                  'Designer',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity} />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>Pursuing Btech CSE from GLA University Mathura. A hardworking and passionate learner. Web Developer with good command in Front-End technologies and React.js</motion.p>
            <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex max-w-max mx-auto mb-12 lg:mx-0'>
              <button className='text-gradient btn-link'>My Portfolio</button>
            </motion.div>

            <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex mx-auto text-[25px] max-w-max gap-x-6 lg:mx-0 mb-4'>
              <a href="https://github.com/Yash245Pathak" target='_blank' rel='noreferrer'>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/yash-pathak-10a6031b6/" target='_blank' rel='noreferrer'>
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} className='hidden lg:flex flex-1 mx-auto max-w-max'>
            <img src={mypic} className='lg:w-[23rem] lg:h-[25rem] w-80 h-96 -hue-rotate-60 rounded-full' alt="" />
          </motion.div>
        </div>
      </div>
    </section>)
    ;
};

export default Banner;
