import React from 'react'
import Carousel from '../components/Carousel'
import QuickLinks from '../components/QuickLinks'
import BestDeals from '../components/BestDeals';

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
      <BestDeals/>
    </div>
  )
}

export default Home
