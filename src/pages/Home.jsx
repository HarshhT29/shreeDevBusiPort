import React from 'react'
import About from '../components/About/About'
import Category from '../components/category/Category'
import RotatingText from '../components/InfiCarousal/InfiniteMarquee'
import Landing1 from '../components/Landing/Landing1'
import Idea from '../components/Newsletter/Newsletter'

const Home = () => {
  return (
    <div>
      <Landing1 />
      <About />
      <Category />
      <RotatingText />
      <Idea />
    </div>
  )
}

export default Home
