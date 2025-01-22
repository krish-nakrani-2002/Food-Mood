import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData'

function FoodIteams() {
  return (
    <div>
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
        />
        )
      })} 
    </div>
  )
};

export default FoodIteams