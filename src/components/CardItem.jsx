import { AddRounded, Favorite, StarRounded } from '@mui/icons-material';
import React, { useState } from 'react';
import './CardItem.scss';

const CardItem = ({ imgSrc, name, price, rating }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(rating));

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  return (
    <div className="itemCard">
      <div className={`isFavorite ${isFavorite ? 'active' : ''}`}>
        <Favorite onClick={() => setIsFavorite((prev) => !prev)} />
      </div>
      <div className="imgBox">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="itemContent">
        <h3>{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? 'orange' : 'gray'}`}
                onClick={() => handleClick(i + 1)}>
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>$ </span>
              {price}
            </h3>
          </div>
          <i className="addToCart">
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
