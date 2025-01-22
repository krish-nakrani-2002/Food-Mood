import React from 'react'
import Nav from '../Components/Nav'
import CategoryMenu from '../Components/CategoryMenu'
import FoodIteams from '../Components/FoodItems'

function Home() {
  return (
    <>
      <Nav />
      <CategoryMenu />
      <FoodIteams />
    </>
  )
}

export default Home