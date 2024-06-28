import React, {useContext} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {


  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch(event.target.value){
      case 'USD': {
        setCurrency({name: 'usd', symbol: '$'})
        break
      }
      case 'EUR':{
        setCurrency({name: 'eur', symbol: '€'})
        break
      }
      case 'LKR':{
        setCurrency({name: 'lkr', symbol: 'Rs'})
        break
      }
      default: {
        setCurrency({name: 'usd', symbol: '$'})
        break
      }
    }
  }
  

  
  return (
    <div className='navbar'>
      <Link to={`/`}>
        <img src={logo} alt='logo' className='logo'/>
      </Link>
        <ul>
        <Link to={`/`}><li>Home</li></Link>
            <li>E-Learnng</li>
            <li>Markect</li>
            <li>Trade</li>
            <li>Pricing</li>
        
        <div className='nav-right'>
            <select onChange={currencyHandler}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="LKR">LKR</option>
            </select>
        </div>
        
        </ul>

        <div>
        <button>Sign In</button>
        </div>
        
    </div>

  )
}

export default Navbar

//https://www.youtube.com/watch?v=jZFaMEqEqEQ&t=220s