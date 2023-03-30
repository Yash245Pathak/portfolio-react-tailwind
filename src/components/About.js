import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import about from '../assets/about.png'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center text-center lg:text-left">
        <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.4 }} className='flex-1 bg-no-repeat bg-contain bg-top'> <img className='h-[300px] lg:h-[400px]' src={about} alt="" /> </motion.div>
        <motion.div
          variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.4 }} className="flex-1" >
          <h2 className='text-[65px] text-accent font-bold mb-6 leading-5'>About Me.</h2>
          <h3 className='text-[20px] font-semibold mb-6 leading-3'>I am a freelance frontend Developer.</h3>
          <p className='mb-6 mx-auto max-w-max'>
            Pursuing Btech CSE from GLA University Mathura. A hardworking and passionate learner. Web Developer with good command in Front-End technologies and React.js. I am a part time freelance web developer and my skill set includes a good hold on <u>React.js</u>, <u>HTML</u>, <u>CSS</u>, <u>Bootstrap</u>, <u>Tailwind CSS</u> and <u>JavaScript</u>. Also i have some knowledge on backend technologies like Node.js, Express.js and Mongo Db. And a little knowledge about UI/UX tools like Figma.
          </p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-6 mx-auto max-w-max lg:mx-0'>
            <div>
              <div className='font-tertiary text-[40px] text-gradient mb-2'>
                {inView ? <CountUp start={0} end={10} duration={4} /> : null}+
              </div>
              <div className='font-primary tracking=[2px] text-sm'>Projects <br /> Completed</div>
            </div>
            <div>
              <div className='font-tertiary text-[40px] text-gradient mb-2'>
                {inView ? <CountUp start={0} end={20} duration={4} /> : null}+
              </div>
              <div className='font-primary tracking=[2px] text-sm'>No of <br /> Code Commits</div>
            </div>
          </div>
          <div className='flex gap-x-6 mx-auto max-w-max lg:mx-0'>
          <button className='capitalize btn btn-sm'><a href="https://github.com/Yash245Pathak" target={'black'}>See My Work</a></button>
            <button className='text-gradient btn-link'><a href='https://drive.google.com/drive/folders/1sGl01LVI4Qg5DZHMbzCRj98vmipOZmp-?usp=share_link' target={'black'} >My Portfolio</a></button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
