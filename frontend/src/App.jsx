import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Homepage from './pages/Homepage'
import HotelDetails from './pages/HotelDetails'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
  <Navbar/>
<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/room/:id" element={<HotelDetails/>} />
  
</Routes>
  <Footer/>
    </div>
  )
}

export default App
