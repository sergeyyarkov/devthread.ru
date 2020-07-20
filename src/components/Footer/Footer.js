import React from 'react';
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import useSiteMetadataQuery from '../../hooks/useSiteMetadataQuery'

import LogoIcon from '../../images/logo-icon.svg'
import GatsbyIcon from '../../images/gatsby-icon.svg'
import NetlifyIcon from '../../images/netlify-icon.svg'

const Footer = () => {
  const { siteMetadata: { title, menuLinks, social: { email, telegram, twitter, yadzen } } } = useSiteMetadataQuery()
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content__logo">
          <LogoIcon />
          <Link to='/'>{title}</Link>
        </div>
        <div className="footer-content__nav">
          <div className="footer-nav__links">
            <div className="links-nav">
              <p>Навигация</p>
              <ul>
                {menuLinks.map((page, i) => page.link !== '/contacts' ? <li key={i}><Link to={page.link}>{page.name}</Link></li> : null)}
              </ul>
            </div>
            <div className="links-contacts">
              <p>Контакты</p>
              <ul>
                <li><Link to='/contacts'>Форма обратной связи</Link></li>
                <li><a href={telegram}>Телеграмм</a></li>
                <li><a href={`mailto:${email}`}>Почта</a></li>
              </ul>
            </div>
            <div className="links-social">
              <p>Социальные сети</p>
              <ul>
                <li><a href={telegram} rel='noreferrer' target='_blank'>Наш телеграмм канал</a></li>
                <li><a href={yadzen} rel='noreferrer' target='_blank'>Яндекс.Дзен</a></li>
                <li><a href={twitter} rel='noreferrer' target='_blank'>Твиттер</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-nav__helpers">
            <span>Разработка при помощи:</span>
            <div className="helpers-icons">
              <a href="https://www.gatsbyjs.org/" rel='noreferrer' target="_blank">
                <GatsbyIcon />
                GatsbyJS
              </a>
              <a href="https://www.netlify.com/" rel='noreferrer' target="_blank">
                <NetlifyIcon />
                Netlify
              </a>
            </div>
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