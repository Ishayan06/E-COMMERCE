import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetter from '../components/NewsLetter';

function Contact() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"CONTACT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6 '>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 wllms station <br />suite 350 washington usa</p>
          <p className='text-gray-500'>TEl :(415)555-8086 <br />Email:admin@forerver.com</p>
          <p className='font-semibold text-xl text-gray-600'>Career at forever</p>
          <p className='text-gray-500'>Learn more about out teams and job openings.</p>
          <button className='border py-2 px-4 hover:bg-black hover:text-white transition-all'>Explore us</button>
        </div>
      </div>
      <NewsLetter/>
    </div>
  );
}

export default Contact;
