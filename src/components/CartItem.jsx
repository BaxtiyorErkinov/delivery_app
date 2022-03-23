import React, { useState } from 'react';
import './CartItem.scss';
import { AddRounded, RemoveRounded } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { cartUpdateAction } from '../store/actions/cartAction';

const CartItem = ({ name, imgSrc, price, id, count, updateData }) => {
  console.log(id);
  return (
    <div className="cartItem">
      <div className="imgBox">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x{count}</span>
          <div className="quantity">
            <RemoveRounded
              onClick={
                count > 1 ? () => console.log('hi') : () => console.log('hi')
              }
            />
            <AddRounded onClick={() => updateData(id, count)} />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$</span>
        <span className="itemPriceValue">{price * count}</span>
      </p>
    </div>
  );
};

export default CartItem;
