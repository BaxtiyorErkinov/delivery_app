import { ChevronRightRounded } from '@mui/icons-material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { foodAction } from '../store/actions/foodAction';

const MenuCards = ({ imgSrc, name, isActive }) => {
  const dispatch = useDispatch();
  return (
    <div className={`rowMenuCard ${isActive ? 'active' : ''}`}>
      <div className="img__box">
        <img src={imgSrc} alt="pic" />
      </div>
      <h3>{name}</h3>
      <i>
        <ChevronRightRounded />
      </i>
    </div>
  );
};

export default MenuCards;
