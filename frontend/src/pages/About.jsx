import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetter from '../components/NewsLetter';

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 ms:w-2/4 text-gray-600'>
          <p>
            Welcome to our store, where fashion meets quality and convenience. We are dedicated to offering a carefully curated selection of trendy and timeless apparel for every style and occasion. 
          </p>
          <p>
            Our team works hard to source high-quality materials and partner with trusted manufacturers to ensure that every piece you buy reflects the latest fashion trends without compromising on comfort or durability.
          </p>
          <b>Our Mission</b>
          <p>
            Our mission is to empower individuals to express themselves through fashion. We aim to make stylish clothing accessible, affordable, and enjoyable for everyone. Customer satisfaction and sustainable practices are at the core of everything we do.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            Every item we offer undergoes strict quality checks to ensure it meets our high standards. From fabric selection to final stitching, we focus on durability, comfort, and design integrity in every product.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            Shop from anywhere, anytime. Our user-friendly online platform makes browsing, ordering, and tracking easy and hassle-free. Enjoy fast, reliable delivery and a seamless shopping experience.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Our support team is always ready to assist you. Whether you have a question about sizing, shipping, or returns, we are committed to providing prompt, helpful, and friendly service every step of the way.
          </p>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
}

export default About;
