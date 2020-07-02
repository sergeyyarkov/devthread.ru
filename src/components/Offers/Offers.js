import React from 'react';
import './Offers.scss'

import PopularIcon from '../../images/popular-icon.svg'
import ViewsIcon from '../../images/views-icon.svg'
import TagIcon from '../../images/tag-icon.svg'
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
      <div className="offers-tags offer-box">
        <div className="offers-tags__heading offer-heading">
          <TagIcon />
          Тэги
        </div>
        <div className="offers-tags__content">
          <div className="tag-item">
            <a href="/">serverless</a>
          </div>
          <div className="tag-item">
            <a href="/">reactjs</a>
          </div>
          <div className="tag-item">
            <a href="/">nodejs</a>
          </div>
          <div className="tag-item">
            <a href="/">graphql</a>
          </div>
          <div className="tag-item">
            <a href="/">seo</a>
          </div>
          <div className="tag-item">
            <a href="/">ооп</a>
          </div>
          <div className="tag-item">
            <a href="/">gatsby</a>
          </div>
          <div className="tag-item">
            <a href="/">nextjs</a>
          </div>
          <div className="tag-item">
            <a href="/">jquery</a>
          </div>
          <div className="tag-item">
            <a href="/">mysql</a>
          </div>
          <div className="tag-item">
            <a href="/">php</a>
          </div>
          <div className="tag-item">
            <a href="/">python</a>
          </div>
          <div className="tag-item">
            <a href="/">jekyll</a>
          </div>
        </div>
      </div>
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