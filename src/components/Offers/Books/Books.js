import React from 'react';

import BooksIcon from '../../../images/books-icon.svg'

const Books = ({ children }) => {
  return (
    <div className="offers-books offer-box">
      <div className="offers-books__heading offer-heading">
        <BooksIcon />
        Что почитать
      </div>
      <div className="offers-books__content">
        {children}
      </div>
    </div>
  )
}

export default Books