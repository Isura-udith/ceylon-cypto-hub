import React, { useContext, useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black bg-opacity-50' : 'bg-transparent'}`}>
      <div className='flex justify-between items-center p-[4px] px-[4%] h-[4.5rem]'>
        <Link to={`/`}>
          <img src={logo} alt='logo' className='h-16' />
        </Link>

        <ul className='flex gap-12'>
          <Link to={`/`}><li className='hover:text-gray-300'>Home</li></Link>
          <Link to={`/course`}><li className='hover:text-gray-300'>E-Learning</li></Link>
          <Link to={`/market`}><li className='hover:text-gray-300'>Market</li></Link>
          <Link to={`/trade`}><li className='hover:text-gray-300'>Trade</li></Link>
          <Link to='/test'><li className='hover:text-gray-300'>Test</li></Link>
          <li className='hover:text-gray-300'>Pricing</li>
          <div className='flex items-center'>
            <select onChange={currencyHandler} className='p-1 ml-2 text-blue-900 bg-white rounded hover:bg-blue-100'>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="LKR">LKR</option>
            </select>
          </div>
        </ul>

        <div>
          <Link to="/Login">
            <button className='px-4 py-2 ml-4 text-blue-900 bg-white rounded-2xl hover:bg-blue-100'>Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
