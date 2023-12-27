import React from 'react'
import QuickLinks from '../components/QuickLinks'
import Carousel from '../components/Carousel'

const CaraouselImages = [
  '../images/Caraousel/Smartphones.jpg',
  '../images/Caraousel/Shoes.jpg',
  '../images/Caraousel/Sports.jpg'
];

const Home = () => {
  return (
    <div className='w-full'>
      <Carousel images={CaraouselImages} />
      <QuickLinks/>
    </div>
  )
}

export default Home
