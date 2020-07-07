import React from 'react';
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import './Footer.scss'

import LogoIcon from '../../images/logo-icon.svg'
import GatsbyIcon from '../../images/gatsby-icon.svg'
import NetlifyIcon from '../../images/netlify-icon.svg'

const Footer = ({ title }) => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content__logo">
          <LogoIcon />
          <a href="/">{title}</a>
        </div>
        <div className="footer-content__nav">
          <div className="footer-nav__links">
            <div className="links-nav">
              <p>Навигация</p>
              <ul>
                <li><Link to='/articles'>Статьи</Link></li>
                <li><Link to='/about'>О сайте</Link></li>
                <li><Link to='/books'>Ресурсы</Link></li>
              </ul>
            </div>
            <div className="links-contacts">
              <p>Контакты</p>
              <ul>
                <li><Link to='/contacts'>Форма обратной связи</Link></li>
                <li><a href="/">Телеграмм</a></li>
                <li><a href="mailto:support@devthread.ru">Почта</a></li>
              </ul>
            </div>
            <div className="links-social">
              <p>Социальные сети</p>
              <ul>
                <li><a href="https://t.me/devthread" rel='noreferrer' target='_blank'>Наш телеграмм канал</a></li>
                <li><a href="/" target='_blank'>Яндекс.Дзен</a></li>
                <li><a href="https://twitter.com/devthread" rel='noreferrer' target='_blank'>Твиттер</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-nav__helpers">
            <a href="https://www.gatsbyjs.org/" rel='noreferrer' target="_blank">
              <GatsbyIcon />
            </a>
            <a href="https://www.netlify.com/" rel='noreferrer' target="_blank">
              <NetlifyIcon />
            </a>
          </div>
        </div>
        <div className="footer-content__copy">
          <span>© 2020 {title}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

Footer.propTypes = {
  title: PropTypes.string
}

Footer.defaultProps = {
  title: null
}