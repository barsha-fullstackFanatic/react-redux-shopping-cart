import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from "../components/CartItem"
import { NavLink } from 'react-router-dom';
const Cart = () => {

     const cart=useSelector((state)=>state.cart);

     const[totalAmount,settotalamount]=useState(0);
    
     useEffect(()=>{
     settotalamount(cart.reduce((acc,item) => acc+item.price, 0))

     },[cart])
  return (
    <div className=''>
      {
        cart.length >0 ? 
        (<div className='flex'><div>{cart.map((item,index)=>(<CartItem key={item.id} item={item} index={index}></CartItem>))}</div>
        
        <div className='flex flex-col mt-[40vh]'>
           <p className='text-2xl text-green-600 font-bold'>Your Cart</p>
           <p className='text-5xl text-green-600 font-semibold'>Summary</p>
           <p className=' text-xl pt-4'>Total items :{cart.length}</p>
           <p className=' text-xl pt-2'>Total Amount : ${totalAmount}</p>
           <button className='mt-auto space-y-5 h-[40px] w-[100px] rounded-md hover:scale-110 transition duration-300 bg-green-700 font-semibold text-white'>Checkout</button>
        </div>
        
        </div>):
        (<div className='flex flex-col content-center justify-center pt-[40vh]'>
           <div> <p className='text-2xl font-semibold'>Your cart is empty!</p></div>
            <div><NavLink to="/"><button className='bg-green-700 text-white h-[40px] w-[100px] rounded-md mt-2 hover:scale-110 transition duration-300'>Shop now</button></NavLink></div>
        </div>)
        





      }


     

    </div>
  )
}

export default Cart
