import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="logo" height={30}/>
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu("Shop")}>
          <Link to="/" className='nav-link'>Home</Link>
          {menu === "Shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens" className='nav-link'>Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens" className='nav-link'>Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" className='nav-link'>Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/cart'><img src={cart_icon} alt='cart icon' height={30} /></Link>
        <div className="nav-cart-count">0</div>
        <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
