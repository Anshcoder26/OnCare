import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='SOS'>
      <div className='logo'>
        <div className='menu'></div>
      </div>
      <div className='icons'>
        <div className='icon ambulance'></div>
        <div className='icon police'></div>
        <div className='icon fire'></div>
      </div>
    </div>
  );
}

export default Home;
