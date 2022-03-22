import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import CardsMenu from './components/CardsMenu';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import MenuContainer from './components/MenuContainer';

function App() {
  const a = useSelector((state) => state);
  return (
    <div className="wrapper">
      <Header />
      <main>
        <MainContainer />
        <CardsMenu />
        <div className="rightMenu"></div>
      </main>
      <MenuContainer />
    </div>
  );
}

export default App;
