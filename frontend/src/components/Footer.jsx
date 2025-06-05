import React from 'react';
import { assets } from '../assets/assets';
function Footer() {
  return (
    <div className='mt-10 pt-10 pb-5 '>
      <div className='flex flex-col sm:flex-row '>
        <div className=' w-full flex flex-col gap-3 p-5 items-center sm:items-start sm:p-0 sm:w-1/2'>
            <img className='w-36' src={assets.logo} alt="" />
            <p className='text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quos recusandae velit consequuntur. Unde sed, deserunt sapiente aut nisi voluptate eum voluptatem aliquam reiciendis ratione amet in dicta, totam temporibus.</p>
        </div>
        <div className='w-full p-2 sm:p-0 sm:w-1/2 flex justify-around'>
            <div className='flex flex-col gap-2 '>
                <p className='font-bold text-2xl'>COMPANY</p>
                <div className='list-none text-gray-700'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </div>
            </div>
            <div className='flex flex-col gap-2 '>
                <p className='font-bold text-2xl'>GET IN TOUCH</p>
                <div className='list-none text-gray-700'>
                    <li>+1-000-000-0000</li>
                    <li>greatstackdev@gmail.com</li>
                    <li>Instagram</li>
                    
                </div>
            </div>
        </div>
      </div>
        <hr className='mt-5 mb-5'/>
        <div className='flex justify-center text-sm sm:text-base '>
            <p>Copyright 2025@ forever.dev - All Right Reserved.</p>
        </div>
    </div>
  );
}

export default Footer;
