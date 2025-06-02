import React, { useState } from 'react';
import Title from '../components/Title';
import CardTotal from '../components/CardTotal';
import { assets } from '../assets/assets';
import { Form, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

function PlaceOrder() {
  
  const {backendUrl,token,cartItems,setCartItems,setLastOrder,lastOrder,getCartitems,getCartAmount,delivery_fee,products} =useContext(ShopContext)
  const [formData,setFormData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:'',
  })
  const onChangeHandler=(event)=>{
    const name=event.target.name
    const value=event.target.value

    setFormData(data=>({...data,[name]:value}))
  }
  const onSubmitHandler=async(e)=>{
    e.preventDefault()
    try {
      let orderItems=[];

      for(const items in cartItems){
        for(const item in cartItems[items]){
          if (cartItems[items][item]>0) {
            const itemInfo=structuredClone(products.find(product=>product._id ===items))
            if (itemInfo) {
              itemInfo.size=item
              itemInfo.quantity=cartItems[items][item];
              orderItems.push(itemInfo)
            }
            
          }
        }
      }

      let orderData={
        address:formData,
        items:orderItems,
        amount:getCartAmount()+delivery_fee
      }

      switch (method) {
        case 'cod':
          const response=await axios.post(backendUrl+'/api/order/place',orderData,{headers:{token}})
          console.log(response.data.success);
          
          if(response.data.success){
            setLastOrder(orderData)
            setCartItems({})
            navigate('/order')
          }else{
            toast.error(response.data.message)
          }
          break;
          case 'stripe':
            const reponseStripe=await axios.post(backendUrl+'/api/order/stripe',orderData,{headers:{token}})
            if (reponseStripe.data.success) {
              const {session_url}=reponseStripe.data
              window.location.replace(session_url)
            }else{
              toast.error(reponseStripe.data.message)
            }
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }
  const [method,setMethod]=useState('cod');
  const navigate=useNavigate();
  return (
    <form className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
      {/* left side       */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px] '>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
        </div>
        <div className='flex gap-3 '>
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='first name' />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='last name' />
        </div>
          <input required onChange={onChangeHandler} name='email' value={formData.email} type="email" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='email address' />
          <input required onChange={onChangeHandler} name='street' value={formData.street} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='street' />
          <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='city' value={formData.city} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' />
          <input required onChange={onChangeHandler} name='state' value={formData.state} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' />
          </div>
          <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='pincode' />
          <input required onChange={onChangeHandler} name='country' value={formData.country} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' />
          </div>
          <input required onChange={onChangeHandler} name='phone' value={formData.phone} type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone' />
      </div>
      {/* right side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CardTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={"PAYMENT"} text2={"METHOD"}/>
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 bprder p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full  ${method==='stripe'?'bg-green-400':""}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 bprder p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'?'bg-green-400':""} `}></p>
              <p className='text-gray-500 text-sm font-medium ms-4'>CASH ON DELIVERY</p>
            </div>

          </div>
          <div className='w-ful text-end mt-8'>
            <button onClick={onSubmitHandler} type='submit' className='bg-black text-white py-3 px-16 text-sm'>PLACE ORDER</button>

          </div>
        </div>

      </div>
    </form>
  );
}

export default PlaceOrder;
