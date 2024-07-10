import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Coin from './Pages/Coin/Coin'
import Footer from './components/Navbar/Footer/Footer'

import Market from './Pages/Market/Market'
import Signup from './Pages/Signup/Signup'
import Trade from './Pages/Trade/Trade'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        <Route path='/Market' element={<Market/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Trade' element={<Trade/>}/>

      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
