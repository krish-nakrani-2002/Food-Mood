import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData'
import toast, { Toaster } from 'react-hot-toast';

function FoodIteams() {

  const handToast = ( name ) => toast.success( `Added ${name}`,);
  
  return (
    <> 
    <Toaster position="top-center"reverseOrder={false} />
    <div className='flex flex-wrap gap-12 justify-center lg:justify-start mx-6 my-10'>
      {FoodData.map((food) => {
        return (
          <FoodCard 
          key={food.id} 
          id={food.id} 
          name={food.name} 
          price={food.price} 
          desc={food.desc}
          rating={food.rating}
          img={food.img}
          handToast={handToast}
          />
        )
      })} 
    </div>
    </>
  )
};

export default FoodIteams