import React from 'react';
import './Offers.scss'
import Tags from './Tags/Tags'

import PopularIcon from '../../images/popular-icon.svg'
import ViewsIcon from '../../images/views-icon.svg'
import BooksIcon from '../../images/books-icon.svg'

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-popular offer-box">
        <div className="offers-popular__heading offer-heading">
          <PopularIcon />
          Популярные статьи</div>
        <div className="offers-popular__content">
          {[1,2,3,4,5].map(e => <div key={e} className="article-item">
            <div className="article-item__title">
              <a href="/">Lorem ipsum dolor sit amet, consectetur.</a>
            </div>
            <div className="article-item__views">
              <ViewsIcon />
              <span>4252</span>
            </div>
          </div>)}
        </div>
      </div>
      <Tags />
      <div className="offers-books offer-box">
        <div className="offers-books__heading offer-heading">
          <BooksIcon />
          Что почитать
        </div>
        <div className="offers-books__content">
          {[1,2,3,4,5].map(e => <div key={e} className="book-item">
            <a href="/">Lorem ipsum dolor sit amet, consectetur.</a>
          </div>)}
        </div>
      </div>
      <div className="offers-subscription offer-box">
        <div className="offers-subscription__heading offer-heading">
           Читайте нас в Telegram
        </div>
        <div className="offers-subscription__content">
          <p>
            В нашем канале telegram вы не пропустите новые статьи, присоединяйтесь к другим разработчикам
          </p>
          <a href="/" target="_blank" className="btn-primary">Подписаться</a>
        </div>
      </div>
    </div>
  )
}

export default Offers