import React from 'react'
import NavBar from './Components/NavBar'
import Page1 from './Components/Page1' 
import Bagwithcard from './Components/Bagwithcard'
import Carousel from './Components/Carousel'
import Midpage from './Components/Midpage'
import Demopage from './Components/Demopage'
import Footer from './Components/Footer'
// import Card from './Components/Card'
const App = () => {
  return (
    <div className='text-black'>
      <div><NavBar/></div>
      <div><Page1/></div>
      <div><Carousel/></div>
      <div><Bagwithcard/></div>
      <div><Midpage/></div>
      <div><Demopage/></div>
      <div><Footer/></div>
    </div>
  )
}

export default App