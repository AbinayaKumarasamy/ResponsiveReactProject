import React from 'react'
import HomePage from './Pages/HomePage'
import Features from './Components/Features'
import NavBar from './Pages/NavBar'
import Footer from './Components/Footer'
import Partners from './Components/Partners'
import ContactUs from './Components/ContactUs'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Pricing from './Components/Pricing'
import Help from './Components/Help'
import Casestudy from './Components/Casestudy'
import UseCase from './Components/UseCase'
import Blog from './Components/Blog'
import ReleaseNotes from './Components/ReleaseNotes'
import Termofuse from './Components/Termofuse'
import PrivacyPolicy from './Components/PrivacyPolicy'
import Videos from './Components/Videos'
import CorporateTrainingPlatform from './Components/CorporateTrainingPlatform'
import AboutUs from './Components/AboutUs'
import PeopleDevelpmentPlatform from './Components/PeopleDevelpomentPlatform'
import TrainingManagementSystem from './Components/TrainingManagementSystem'
import ContentCreationServices from './Components/ContentCreationServices'
import PerformanceReviewSystem from './Components/PerformanceReviewSystem'
import Industry from './Components/Industry'
import RequestDemo from './Components/RequestDemo'
import Download from './Components/Download'
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
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/ReleaseNotes" element={<ReleaseNotes/>}/>
        <Route path="/Termsofuse" element={<Termofuse/>}/>
        <Route path="/Privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/Videos" element={<Videos/>}/>
        <Route path="/Corporatetrainingplatform" element={<CorporateTrainingPlatform/>}/>
        <Route path="/Peopledevelpmentplatform" element={<PeopleDevelpmentPlatform/>}/>
        <Route path="TrainingManagementSystem" element={<TrainingManagementSystem/>}/>
        <Route path="Contentcreationservices" element={<ContentCreationServices/>}/>
        <Route path="/Performancereviewsystem" element={<PerformanceReviewSystem/>}/>
        <Route path="/Industry" element={<Industry/>}/>
        <Route path="/Aboutus" element={<AboutUs/>}/>
        <Route path="/Requestdemo" element={<RequestDemo/>}/>
        <Route path="/Download" element={<Download/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App