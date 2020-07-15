import React from 'react';
import { useLocation } from '@reach/router'

const Subscription = () => {
  const { pathname } = useLocation()
  return (
    <div style={pathname !== '/about' ? { height: '100%' } : null}>
      <div style={pathname !== '/about' ? { position: 'sticky', top: 75 } : null} className="offers-subscription offer-box">
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
    </div>
  )
}
export default Subscription