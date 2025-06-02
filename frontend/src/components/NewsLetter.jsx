import React from 'react';

function NewsLetter() {
    const handlesubmit=(event)=>{
        event.preventDefault();
    };
  return (
    <div className='text-center'>
      <div className='text-2xl font-medium text-gray-800'>Subscribe and get 20%off</div>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iusto, dicta nam culpa harum </p>
      <form className='flex w-full mx-auto sm:w-1/2 my-3 pl-3 border gap-3 items-center' >
        <input onSubmit={handlesubmit} type="email" placeholder='Enter your email' className='w-full sm:flex-1 outine-none' required />
        <button className='bg-black text-white py-4 px-10'>SUBSCRIBE</button>
      </form>
    </div>
  );
}

export default NewsLetter;
