import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import useSiteMetadataQuery from "../../hooks/useSiteMetadataQuery"

import LogoIcon from "../../images/logo-icon.svg"
import RssIcon from "../../images/rss-icon.svg"

const Footer = ({ amp }) => {
  const {
    siteMetadata: {
      title,
      menuLinks,
      social: { email, telegram, twitter, yadzen },
    },
  } = useSiteMetadataQuery()
  return (
    <footer>
      <div className="footer-content" style={amp ? { maxWidth: 800 } : null}>
        <div className="footer-content__logo">
          <LogoIcon />
          <Link to="/">{title}</Link>
        </div>
        <div className="footer-content__nav">
          <div className="footer-nav__links">
            <div className="links-nav">
              <p>Навигация</p>
              <ul>
                {menuLinks.map((page, i) =>
                  page.link !== "/contacts" ? (
                    <li key={i}>
                      <Link to={page.link}>{page.name}</Link>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
            <div className="links-contacts">
              <p>Контакты</p>
              <ul>
                <li>
                  <Link to="/contacts">Форма обратной связи</Link>
                </li>
                <li>
                  <a href={telegram}>Телеграмм</a>
                </li>
                <li>
                  <a href={`mailto:${email}`}>Почта</a>
                </li>
              </ul>
            </div>
            <div className="links-social">
              <p>Социальные сети</p>
              <ul>
                <li>
                  <a href={telegram} rel="noreferrer" target="_blank">
                    Наш телеграмм канал
                  </a>
                </li>
                <li>
                  <a href={yadzen} rel="noreferrer" target="_blank">
                    Яндекс.Дзен
                  </a>
                </li>
                <li>
                  <a href={twitter} rel="noreferrer" target="_blank">
                    Твиттер
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-content__copy">
          <div className="rss-feed">
            <a href="/rss.xml" target="_blank">
              <RssIcon />
              RSS Канал
            </a>
          </div>
          <span>© 2020 {title}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

Footer.propTypes = {
  amp: PropTypes.bool,
}

