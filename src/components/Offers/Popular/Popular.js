import React from 'react';

import PopularIcon from '../../../images/popular-icon.svg'

const Popular = ({ children }) => {
  return (
    <div className="offers-popular offer-box">
      <div className="offers-popular__heading offer-heading">
        <PopularIcon />
        Популярные статьи</div>
      <div className="offers-popular__content">
        {children}
      </div>
    </div>
  )
}

export default Popular