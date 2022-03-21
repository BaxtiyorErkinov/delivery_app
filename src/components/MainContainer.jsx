import React from 'react';
import './MainContainer.scss';
import Banner from '../assets/Banner.png';

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <div className="banner">
        <div className="banner__info">
          <h3>Hello User</h3>
          <p>
            Get free discount for every <span>$20</span> purchase
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="banner__img">
          <img src={Banner} alt="banner" className="banner__img__item" />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
