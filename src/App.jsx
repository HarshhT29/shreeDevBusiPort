import About from './components/About/About'
import Category from './components/category/Category'
import Footer from './components/Footer/Footer'
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
      <Footer />
    </>
  )
}

export default App
