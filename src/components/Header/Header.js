import React from 'react'
import { useLocation } from '@reach/router'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import useSiteMetadataQuery from '../../hooks/useSiteMetadataQuery'
import ThemeContext from '../../context/ThemeContext'
import './Header.scss'

import LogoIcon from '../../images/logo-icon.svg'
import TelegramIcon from '../../images/telegram-icon.svg'
import TwitterIcon from '../../images/twitter-icon.svg'
import MoonIcon from '../../images/moon-icon.svg'
import SunIcon from '../../images/sun-icon.svg'

const Header = () => {
  const { siteMetadata: { title, menuLinks, social: { twitter, telegram } } } = useSiteMetadataQuery()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const { pathname } = useLocation()

  React.useEffect(() =>  {
    isMobileOpen ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = ''
    document.body.onscroll = () => window.pageYOffset >= 100 ? setIsScrolled(true) : setIsScrolled(false)
  })

  const mobileHandler = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const renderLinks = () => {
    return (
      <ul>
        {menuLinks.map((page, i) => <li key={i} className={page.link === pathname ? 'active' : null}><Link to={page.link}>{page.name}</Link></li>)}
      </ul>
    )
  }
  
  return (
    <header className={isScrolled ? 'headerScrolled' : null}>
      <div className="header-content">
        <div className="header-content__logo">
          <LogoIcon />
          <Link to='/'>{title}</Link>
        </div>
        <div className="header-content__nav desktop">
          <div className="header-nav__social">
            <a href={telegram} target="_blank" rel='noreferrer'>
              <TelegramIcon />
            </a>
            <a href={twitter} target="_blank" rel='noreferrer'>
              <TwitterIcon />
            </a>
          </div>
          <div className="header-nav__links">
            <nav>
              {renderLinks()}
            </nav>
          </div>
          <div className="header-nav__theme">
            <ThemeContext.Consumer>
              {theme => theme.isDark ? <SunIcon onClick={theme.toggleLightTheme} /> : <MoonIcon onClick={theme.toggleDarkTheme} />}
            </ThemeContext.Consumer>
          </div>
        </div>
        <div className={isMobileOpen ? 'header-content__nav mobile mobileOpen' : 'header-content__nav mobile'}>
          {isMobileOpen 
            ? <>
                <span>{title}</span>
                <nav>
                  {renderLinks()}
                </nav>
                <div className="mobile-social">
                  <a href="/" target="_blank">
                    <TelegramIcon />
                  </a>
                  <a href="/" target="_blank">
                    <TwitterIcon />
                  </a>
                </div>
              </>
            : null 
          }
        </div>
        <button onClick={mobileHandler} className={isMobileOpen ? "header-content__button mobile active" : 'header-content__button mobile'}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header

Header.propTypes = {
  title: PropTypes.string,
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string
    })
  )
}

Header.defaultProps = {
  title: null,
  menuLinks: null
}