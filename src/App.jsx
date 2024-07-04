import React from 'react'
import HomePage from './Pages/HomePage'
import Features from './Pages/Features'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Partners from './Components/Partners'
import ContactUs from './Components/ContactUs'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Pricing from './Components/Pricing'
import Help from './Components/Help'
import Casestudy from './Components/Casestudy'
import UseCase from './Components/UseCase'
const App = () => {
  return (

    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/Features" element={<Features/>}/>
        <Route path="/Partners" element={<Partners/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Help" element={<Help/>}/>
        <Route path="/Usecase" element={<UseCase/>}/>
        <Route path="/Casestudy" element={<Casestudy/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App