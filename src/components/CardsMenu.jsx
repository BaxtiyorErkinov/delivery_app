import React, { useEffect, useState } from 'react';
import './CardsMenu.scss';
import MenuCards from './MenuCards';
import SubmenuContainer from './SubmenuContainer';
import Burger from '../assets/burger.png';
import { Items, MenuItems } from '../data.js';
import CardItem from './CardItem';
import { useSelector, useDispatch } from 'react-redux';
import { foodAction } from '../store/actions/foodAction';
import { cartUpdateAction } from '../store/actions/cartAction';
const CardsMenu = () => {
  const mainData = useSelector((state) => state.foods);
  // const [mainData, setMainData] = useState(
  //   Items.filter((item) => item.itemId === 'burger01'),
  // );
  console.log(mainData);
  const dispatch = useDispatch();

  useEffect(() => {
    const menuCards = document
      .querySelector('.row__container')
      .querySelectorAll('.rowMenuCard');

    function setActiveMenu() {
      menuCards.forEach((el) => el.classList.remove('active'));
      this.classList.add('active');
    }

    menuCards.forEach((el) => el.addEventListener('click', setActiveMenu));
  }, []);

  const changeData = (itemId) => {
    // setMainData(Items.filter((item) => item.itemId === itemId));
    dispatch(foodAction(itemId));
  };

  return (
    <div className="cards__container">
      <div className="menu__cards">
        <SubmenuContainer name={'Menu Category'} />
      </div>
      <div className="row__container">
        {MenuItems &&
          MenuItems.map((item) => (
            <div key={item.id} onClick={() => changeData(item.itemId)}>
              <MenuCards
                imgSrc={item.imgSrc}
                name={item.name}
                isActive={item.id === 1 ? true : false}
              />
            </div>
          ))}
      </div>
      <div className="card__item__container">
        {mainData &&
          mainData.map((item) => (
            <CardItem
              imgSrc={item.imgSrc}
              name={item.name}
              rating={item.rating}
              price={item.price}
              id={item.id}
            />
          ))}
      </div>
    </div>
  );
};

export default CardsMenu;
