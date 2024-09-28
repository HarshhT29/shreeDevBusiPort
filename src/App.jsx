import About from './components/About/About'
import Category from './components/category/Category'
import Navbar from './components/header/Navbar'
import RotatingText from './components/InfiCarousal/InfiniteMarquee'
import Landing1 from './components/Landing/Landing1'
import Idea from './components/Newsletter/Newsletter'


const App = () => {
  return (
    <>
      <Navbar />
      <Landing1 />
      <About />
      <Category />
      <RotatingText />
      <Idea />
    </>
  )
}

export default App
