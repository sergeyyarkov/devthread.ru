import React from 'react';

const Subscription = () => {
  return (
    <div className="offers-subscription offer-box">
      <div className="offers-subscription__heading offer-heading">
          Читайте нас в Telegram
      </div>
      <div className="offers-subscription__content">
        <p>
          В нашем канале telegram вы не пропустите новые статьи, присоединяйтесь к другим разработчикам
        </p>
        <a href="https://t.me/devthread" rel='noreferrer' target="_blank" className="btn-primary">Подписаться</a>
      </div>
    </div>
  )
}
export default Subscription