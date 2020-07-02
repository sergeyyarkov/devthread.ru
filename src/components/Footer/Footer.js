import React from 'react';
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
                <li><a href="/">Статьи</a></li>
                <li><a href="/">О сайте</a></li>
                <li><a href="/">Ресурсы</a></li>
              </ul>
            </div>
            <div className="links-contacts">
              <p>Контакты</p>
              <ul>
                <li><a href="/">Форма обратной связи</a></li>
                <li><a href="/">Телеграмм</a></li>
                <li><a href="/">Почта</a></li>
              </ul>
            </div>
            <div className="links-social">
              <p>Социальные сети</p>
              <ul>
                <li><a href="/">Наш телеграмм канал</a></li>
                <li><a href="/">Яндекс.Дзен</a></li>
                <li><a href="/">Твиттер</a></li>
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