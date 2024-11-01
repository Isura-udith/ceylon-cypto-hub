import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Coin from './Pages/Coin/Coin'
import Footer from './components/Navbar/Footer/Footer'
import Market from './Pages/Market/Market'
import Login from './Pages/Login/Login'
import Trade from './Pages/Trade/Trade'
import Signup from './Pages/Signup/Signup'
import Dashboard from './Pages/Dashboard/UserDashboard'
import Test from './Pages/Test/Test'
import Elearning from './Pages/E-learning/Course'
import Admin from './Pages/Admin/Admin'
import SignDashboard from './Pages/Admin/SignDashboard'
import TradeDashboard from './Pages/Admin/TradeDashboard'
import TradeClose from './Pages/Admin/TradeClose'

const App = () => {

  let mybackendurl = 'http://localhost:5000'

  
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        <Route path='/Market' element={<Market/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Trade' element={<Trade/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/userdashboard' element={<Dashboard/>}/>
        <Route path='/Test' element={<Test/>}/>
        <Route path='/course' element={<Elearning/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/SignDashboard' element={<SignDashboard/>}/>
        <Route path='/TradeDashboard' element={<TradeDashboard/>}/>
        <Route path='/TradeClose' element={<TradeClose/>}/>

        </Routes>

      <Footer/>
      
      
    </div>
  )
}

export default App
