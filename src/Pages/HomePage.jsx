import React from 'react'
import NavBar from '../Components/NavBar'
import Page1 from '../Components/Page1' 
import Bagwithcard from '../Components/Bagwithcard'
import Carousel from '../Components/Carousel'
import Midpage from '../Components/Midpage'
import Demopage from '../Components/Demopage'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Fivebrothers from '../Components/Fivebrothers'
import Carousel2 from '../Components/Carousel2'
import Carousel3 from '../Components/Carousel3'


const HomePage = () => {
  return (
    <div className='text-black'>
      {/* <div><NavBar/></div> */}
      <div><Page1/></div>
      <div><Carousel/></div>
      <div><Carousel3/></div>
      <div><Bagwithcard/></div>
      <div><Carousel2/></div>
      <div><Card/></div>
      <div><Fivebrothers/></div>
      <div><Midpage/></div>
      <div><Demopage/></div>
      {/* <div><Footer/></div> */}

    </div>
  )
}

export default HomePage