import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';
function verify() {
    const {token,backendUrl,setCartItems}=useContext(ShopContext)
    const [searchParams,setSearchParams]=useSearchParams()
    const success=searchParams.get('success')
    const orderId=searchParams.get('orderId')
    const navigate=useNavigate()
    const verifyStripe=async()=>{
        try {
            if(!token){
                return null;
            }
            const response=await axios.post(backendUrl+'/api/order/verifyStripe',{success,orderId},{headers:{token}});
            if (response.data.success) {
              setCartItems({})
              navigate('/orders')
            }else{
              navigate('/cart')
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }
    useEffect(()=>{
      verifyStripe()
    },[token])
  return (
    <div>
      
    </div>
  );
}

export default verify;
