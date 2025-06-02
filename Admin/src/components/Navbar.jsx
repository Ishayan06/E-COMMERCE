import React from 'react';
import { assets } from '../../../frontend/src/assets/assets';

function Navbar({setToken}) {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <button onClick={()=>setToken("")} className='bg-gray-700 text-white px-5 py-2 sm:px-7 hover:bg-gray-500 sm:py-2 rounded-full text-xs sm:text-sm'>Log Out</button>
    </div>
  );
}

export default Navbar;
