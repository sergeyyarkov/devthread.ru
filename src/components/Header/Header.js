import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import ThemeContext from '../../context/ThemeContext'
import './Header.scss'

import TelegramIcon from '../../images/telegram-icon.svg'
import TwitterIcon from '../../images/twitter-icon.svg'
import MoonIcon from '../../images/moon-icon.svg'
import SunIcon from '../../images/sun-icon.svg'

const Header = ({ title, menuLinks }) => {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

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
        {menuLinks.map((page, i) => <li key={i}><Link to={page.link}>{page.name}</Link></li>)}
      </ul>
    )
  }
  
  return (
    <header className={isScrolled ? 'headerScrolled' : null}>
      <div className="header-content">
        <div className="header-content__logo">
          <svg width={27} height={20} viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="logo-img" d="M12.854 18.361C13.484 19.262 14.491 19.245 15.09 18.323L25.91 1.67701C26.509 0.755007 26.1 7.62939e-06 25 7.62939e-06L1.99999 7.62939e-06C0.89999 7.62939e-06 0.516991 0.737007 1.14599 1.63901L12.854 18.361Z" fill="#2D2D2D" />
          </svg>
          <Link to='/'>{title}</Link>
        </div>
        <div className="header-content__nav desktop">
          <div className="header-nav__social">
            <a href="/" target="_blank">
              <TelegramIcon />
            </a>
            <a href="/" target="_blank">
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