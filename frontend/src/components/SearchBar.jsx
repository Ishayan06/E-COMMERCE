import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
function SearchBar() {
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext);
  return showSearch? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className='flex-1  outline-none bg-inherit text-sm' placeholder='Search'/>
            <img src={assets.search_icon} className='w-4 ' alt="" />
        </div>
      <img onClick={()=>{setShowSearch(false)}} src={assets.cross_icon} className='w-3 inline cursor-pointer' alt="" />
    </div>
  ) :null;
}

export default SearchBar;
