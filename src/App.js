import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      <div className='h-[1000px]'></div>
    </div>
  );
};

export default App;
