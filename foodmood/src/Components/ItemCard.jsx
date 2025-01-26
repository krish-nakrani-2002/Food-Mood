import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/Slices/CartSlice';

const ItemCard = ({ id, name, price, img, qty }) => {

  const dispatch = useDispatch();

  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
        <MdDelete
        onClick={() => dispatch(removeFromCart({id, name, price, img, qty}))} 
        className='absolute right-7 text-gray-600 cursor-pointer' />
        <img src={img} alt=""className='w-[50px] h-[50px]'/>
        <div className='leading-5'>
          <h2 className='font-bold text-gray-800'>{name}</h2>
          <div className='flex justify-between'>
            <span className='text-green-500 font-bold'>₹{price}</span>
            <div className='flex gap-2 items-center justify-center absolute right-7'>
          <AiOutlinePlus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-xl transition-all ease-linear cursor-pointer hover:border-none' /> 
          <span>{qty}</span>
          <AiOutlineMinus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-xl transition-all ease-linear cursor-pointer hover:border-none' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default ItemCard