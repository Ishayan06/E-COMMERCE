import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import {Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
function Navbar() {
      const {search,setSearch,showSearch,setShowSearch,getCartCount,token,setToken,setCartItems}=useContext(ShopContext);
  const [visible,setvisible]=useState(false);
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem('token')
    setToken('')
    setCartItems({});
    navigate('/login')
  }
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to='/'><img src={assets.logo} alt="Logo" className="w-32" /></Link>
      <ul className=" gap-9 hidden sm:flex">
        <li>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="border-none h-[1.5px] w-7 bg-gray-800 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>Collection</p>
            <hr className="border-none h-[1.5px] w-7 bg-gray-800 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className="border-none h-[1.5px] w-7 bg-gray-800 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className="border-none h-[1.5px] w-7 bg-gray-800 hidden" />
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-6">
        <img onClick={()=>{setShowSearch(true)}} className="cursor-pointer w-5" src={assets.search_icon} alt="" />
        <div className="relative group">
         
         <img 
         onClick={()=>token ? null:navigate("/login")}
            className="cursor-pointer w-5 "
            src={assets.profile_icon}
            alt="Profile"
          />
          {token && 
          <div className="absolute right-0  w-36 bg-gray-100 p-3 rounded-md shadow-lg hidden group-hover:flex flex-col gap-2 text-slate-500 z-10">
            <p className="hover:text-black cursor-pointer">My Profile</p>
            <p onClick={()=>navigate("/order")} className="hover:text-black cursor-pointer">Orders</p>
            <p onClick={logout} className="hover:text-black cursor-pointer">Log Out</p>
          </div>}
          
        </div>
        <Link to='/cart' className="relative">
          <img  src={assets.cart_icon} className="w-5 cursor-pointer" alt="" />
          <p className="bg-black absolute  w-4 text-center bottom-[-5px] text-[8px] h-3 right-[-5px] leading-3 text-xs text-white rounded-lg">{getCartCount()}</p>
        </Link>
        <img onClick={()=>{setvisible(true)}} className="w-5 block sm:hidden cursor-pointer" src={assets.menu_icon} alt="" />
      </div>
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white ${visible?'w-full':'w-0'}`}>
          <div className="flex flex-col  text-gray-600">
            <div onClick={()=>{setvisible(false)}} className="flex items-center gap-4 p-3">
              <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
              <p>Back</p>
            </div>
            <hr />
            <NavLink onClick={()=>{setvisible(false)}} className="p-3 pl-5 cursor-pointer " to='/'>HOME</NavLink>
            <hr />
            <NavLink onClick={()=>{setvisible(false)}} className="p-3 pl-5 cursor-pointer " to='/collection'>COLLECTIONS</NavLink>
            <hr />
            <NavLink onClick={()=>{setvisible(false)}} className="p-3 pl-5 cursor-pointer " to='/about'>ABOUT</NavLink>
            <hr />
            <NavLink onClick={()=>{setvisible(false)}} className="p-3 pl-5 cursor-pointer " to='/contact'>CONTACT</NavLink>
            <hr />
          </div>
      </div>
    </div>
  );
}

export default Navbar;
