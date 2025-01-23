import React from 'react'
import { AiOutlineClose  } from "react-icons/ai";
import ItemCard from './ItemCard';

const Cart = () => {
  return (
  <>
    <div className='fixed top-0 right-0 w-full lg:w-[21vw] h-full p-5 bg-white'>
        <div className='flex justify-between my-3'>
            <span className='text-xl font-bold text-gray-800'>My Order</span>
            <AiOutlineClose  className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-400 hover:border-red-400 cursor-pointer' />
        </div>

        <ItemCard />

        <div className='absolute bottom-0'> 
            <h3 className='font-semibold text-gray-800'>Items: </h3>
            <h3 className='font-semibold text-gray-800'>Total Amount: </h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2' />
            <button className='bg-green-500 font-bold text-white px-3 py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>
        </div>
    </div>
  </>
 );
}

export default Cart