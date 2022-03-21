import React, { useEffect } from 'react';
import {
  AccountBalanceRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from '@mui/icons-material';
import './MenuContainer.scss';

const MenuContainer = () => {
  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li');

    function setMenuActive() {
      menuLi.forEach((el) => el.classList.remove('active'));
      this.classList.add('active');
    }

    menuLi.forEach((el) => el.addEventListener('click', setMenuActive));
  }, []);

  return (
    <div className="bottomMenu">
      <ul id="menu">
        <li className="active">
          <a href="#">
            <span className="icon">
              <HomeRounded />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <Chat />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <AccountBalanceRounded />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <Favorite />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <SummarizeRounded />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <Settings />
            </span>
          </a>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default MenuContainer;
