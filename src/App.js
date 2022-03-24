import { useMemo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartUpdateAction } from './store/actions/cartAction';
import './App.scss';
import CardsMenu from './components/CardsMenu';
import DebitCard from './components/DebitCard';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import MenuContainer from './components/MenuContainer';
import SubmenuContainer from './components/SubmenuContainer';
import Burger from './assets/burger.png';
import CartItem from './components/CartItem';

function App() {
  const cartItems = useSelector((state) => state.cart.cart);
  const [count, setCount] = useState(1);
  const [totalSum, setTotalSum] = useState(0);

  const dispatch = useDispatch();

  const updateData = (id, count) => {
    dispatch(cartUpdateAction(id, count + 1));
  };

  useEffect(() => {
    const totalSum = cartItems.reduce(
      (acc, curr) => acc + +curr.price * curr.count,
      0,
    );
    setTotalSum(totalSum);
  }, [cartItems]);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <MainContainer />
        <CardsMenu />
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>
          <div className="cartCheckOutContainer">
            <SubmenuContainer name={'Cart Items'} />
            <div className="cartContainer">
              <div className="cartItems">
                {cartItems &&
                  cartItems.map((item) => (
                    <CartItem
                      name={item.name}
                      imgSrc={item.imgSrc}
                      price={item.price}
                      key={item.id}
                      count={item.count}
                      id={item.id}
                      updateData={updateData}
                    />
                  ))}
              </div>
            </div>
            <div className="bottom__section">
              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$ </span>
                  {totalSum}
                </p>
              </div>
              <button className="checkout">Check Out</button>
            </div>
          </div>
        </div>
      </main>
      <MenuContainer />
    </div>
  );
}

export default App;
