import React from 'react';

const NavBar = () => {
  return (
    <div>
      <div className='flex justify-between px-6 md:px-24 py-4 md:py-10'>
      <div className='footerLeft flex flex-row'>
        <img src='./src/images/logoipsum-296.svg'/>
        <h1 className='text-blue-500 text-[25px] md:text-[35px] font-extrabold hidden md:block'>Logoipsum</h1></div>
        <div className='text-white text-[17px] flex md:hidden'>
          <button className='text-white'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          </button>
        </div>
        <div className='text-white text-[17px] hidden md:flex gap-12'>
          <a href='' className='text-white'>Countries</a>
          {/* <a href='' className='text-white'>Continents</a>
          <a href='' className='text-white'>Regions</a> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;