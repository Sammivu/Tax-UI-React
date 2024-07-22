import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Hero from './component/Hero'
import Features from './pages/Features'
import Business from './pages/Business'
import GetStarted from './component/GetStarted'
import Price from './pages/Price'
import Testimonials from './pages/Testimonials'
import Faq from './component/Faq'



function App() {


  return (
    <>
      
      {/* <Hero />
       <Features /> 
      <GetStarted/>
       <Business/>
       <Testimonials/>
      <Price/> 
      <Faq/>  */}

      <BrowserRouter>
        <Routes>
          <Route path='' element={<Hero/>} ></Route>
          <Route path='' element={<GetStarted/>} ></Route>
          <Route path='' element={<Faq/>} ></Route>
          <Route path ="/features" element={<Features/>}></Route>
          <Route path="/business" element={<Business />} ></Route>
          {/* <Route path="/getStarted" element={<GetStarted />} ></Route> */}
          <Route path="/testimonial" element={<Testimonials />}></Route>
          <Route path="/pricing" element={<Price />}></Route>
          {/* <Route path="/faq" element={<Faq />}> </Route> */}
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
