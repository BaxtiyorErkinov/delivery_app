import React from 'react';
import './DebitCard.scss';
import Chip from '../assets/chip.png';
import Visa from '../assets/visa.png';

const DebitCard = () => {
  return (
    <div className="cardGroup">
      <img src={Visa} alt="visa" className="card_logo" />
      <img src={Chip} alt="chip" className="card_chip" />
      <div className="card_number">1234 456 7891 1230</div>
      <div className="card_name">Baxityor Erkinov</div>
      <div className="card_from">10/21</div>
      <div className="card_to">10/25</div>
      <div className="card_ring"></div>
    </div>
  );
};

export default DebitCard;
