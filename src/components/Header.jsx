import React, { useEffect } from 'react';
import {
  SearchRounded,
  ShoppingCartRounded,
  BarChart,
} from '@mui/icons-material';
import Logo from '../assets/logo.svg';
import './Header.scss';

const Header = () => {
  useEffect(() => {
    const cartToggle = document.querySelector('.shoppingCart');
    cartToggle.addEventListener('click', () => {
      document.querySelector('.rightMenu').classList.toggle('active');
    });
  }, []);
  return (
    <header>
      <img src={Logo} alt="logo" className="logo" />
      <div className="profileContainer">
        <div className="searchBox">
          <SearchRounded className="searchIcon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="shoppingCart">
          <ShoppingCartRounded className="cart" />
          <div className="cart_content">
            <p>2</p>
          </div>
        </div>
        <div className="imgBox">
          <img
            src="https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470__340.jpg"
            alt="avatar"
          />
        </div>
        <h2 className="userName">Baxtiyor</h2>
      </div>
    </header>
  );
};

export default Header;
