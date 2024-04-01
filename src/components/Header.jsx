import React from 'react';
import NavBar from './NavBar';

const Header = () => {
  return (
    <div>
      <div className='w-full bg-[url(src/images/head_background.jpeg)] bg-no-repeat bg-cover h-[400px] relative'>
        <NavBar />
        <div className='text-white text-center absolute inset-0 flex flex-col justify-center items-center'>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>Country API App</h1>
          <p className='text-lg md:text-xl lg:text-2xl p-6'>This is a simple app that allows you to search for countries and continents using the API.</p>
          <input className='bg-white h-12 w-[80%] max-w-lg px-4 sm:ml-10' placeholder="Search country by name" />
        </div>
      </div>
    </div>
  );
};

export default Header;