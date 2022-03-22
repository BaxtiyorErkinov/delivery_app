import { ChevronRightRounded } from '@mui/icons-material';
import React from 'react';

const SubmenuContainer = ({ name }) => {
  return (
    <div className="submenu__container">
      <h3>{name}</h3>
      <div className="view__all">
        <p>ViewAll</p>
        <i>
          <ChevronRightRounded />
        </i>
      </div>
    </div>
  );
};

export default SubmenuContainer;
