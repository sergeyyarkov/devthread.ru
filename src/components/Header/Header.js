import React from "react"
import { useLocation } from "@reach/router"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import useSiteMetadataQuery from "../../hooks/useSiteMetadataQuery"
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher"

import LogoIcon from "../../images/logo-icon.svg"
import TelegramIcon from "../../images/telegram-icon.svg"
import TwitterIcon from "../../images/twitter-icon.svg"
import YadzenIcon from "../../images/yadzen-icon.svg"

const Header = () => {
  const {
    siteMetadata: {
      title,
      menuLinks,
      social: { twitter, telegram, yadzen },
    },
  } = useSiteMetadataQuery()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const [ready, setReady] = React.useState(false)
  const [isDark, setIsDark] = React.useState(false)

  const { pathname } = useLocation()

  React.useEffect(() => {
    setIsDark(window.__isDarkTheme)
    setReady(true)
    isMobileOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "")
    document.body.onscroll = () =>
      window.pageYOffset >= 100 ? setIsScrolled(true) : setIsScrolled(false)
  }, [isMobileOpen, setIsDark, setReady])

  const mobileHandler = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const MenuLinks = () => {
    return (
      <ul>
        {menuLinks.map((page, i) => (
          <li
            key={i}
            className={
              page.link === pathname || pathname === `${page.link}/`
                ? "active"
                : null
            }
          >
            <Link onClick={() => setIsMobileOpen(false)} to={page.link}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  const SocialLinks = () => {
    return (
      <>
        <a href={yadzen} target="_blank" rel="noreferrer">
          <YadzenIcon />
          Ян.Дзен
        </a>
        <a href={telegram} target="_blank" rel="noreferrer">
          <TelegramIcon />
          Телеграмм
        </a>
        <a href={twitter} target="_blank" rel="noreferrer">
          <TwitterIcon />
          Твиттер
        </a>
      </>
    )
  }

  return (
    <header className={isScrolled ? "headerScrolled" : null}>
      <div className="header-content">
        <div className="header-content__logo">
          <LogoIcon />
          <Link to="/">{title}</Link>
        </div>
        <div className="header-content__nav desktop">
          <div className="header-nav__social">
            <SocialLinks />
          </div>
          <div className="header-nav__links">
            <nav>
              <MenuLinks />
            </nav>
          </div>
          <ThemeSwitcher ready={ready} isDark={isDark} setIsDark={setIsDark} />
        </div>
        <div
          className={
            isMobileOpen
              ? "header-content__nav mobile mobileOpen"
              : "header-content__nav mobile"
          }
        >
          {isMobileOpen ? (
            <>
              <span>{title}</span>
              <nav>
                <MenuLinks />
              </nav>
              <ThemeSwitcher
                ready={ready}
                isDark={isDark}
                setIsDark={setIsDark}
              />
              <div className="mobile-social">
                <SocialLinks />
              </div>
            </>
          ) : null}
        </div>
        <button
          aria-label="menu"
          onClick={mobileHandler}
          className={
            isMobileOpen
              ? "header-content__button mobile active"
              : "header-content__button mobile"
          }
        >
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
      name: PropTypes.string,
    })
  ),
}

Header.defaultProps = {
  title: null,
  menuLinks: null,
}
