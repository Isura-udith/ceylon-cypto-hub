import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'USD': {
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      }
      case 'EUR': {
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      }
      case 'LKR': {
        setCurrency({ name: 'lkr', symbol: 'Rs' });
        break;
      }
      default: {
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      }
    }
  };

  return (
    <div className='navbar'>
      <Link to={`/`}>
        <img src={logo} alt='logo' className='logo' />
      </Link>
    
      <ul>
        <Link to={`/`}><li>Home</li></Link>
        <Link to={`/course`}><li>E-Learning</li></Link>
        <Link to={`/market`}><li>Market</li></Link>
        <Link to={`/trade`}><li>Trade</li></Link>
        <Link to='/test'><li>Test</li></Link>
        <li>Pricing</li>
        <div className='nav-right'>
          <select onChange={currencyHandler}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="LKR">LKR</option>
          </select>          
        </div>
        <DarkModeToggle /> {}

      </ul>
      <div>
        <Link to="/Login"><button>Log In</button></Link>
      </div>
    </div>
  );
};

export default Navbar;