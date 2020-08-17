import React from 'react';
import { Helmet } from 'react-helmet'
import useSiteMetadataQuery from '../hooks/useSiteMetadataQuery'

import LogoIcon from '../images/logo-icon.svg'
import TelegramIcon from "../images/telegram-icon.svg"
import TwitterIcon from "../images/twitter-icon.svg"
import YadzenIcon from "../images/yadzen-icon.svg"

const HeaderAMP = () => {
  const {
    siteMetadata: {
      title,
      menuLinks,
      social: { twitter, telegram, yadzen },
    },
  } = useSiteMetadataQuery()

  return (
    <>
      <Helmet>
        <style jsx amp-custom>
          {`
            amp-sidebar {
              height: 100%;
              padding: 0px 24px;
              padding-top: 25px;
              background-color: rgba(7,11,14,.99);
              width: 320px;
            }
            amp-sidebar nav li {
              margin: 0 0 15px;
              font-size: 24px;
              font-weight: 600;
            }
            amp-sidebar nav li a {
              color: #eee;
              text-decoration: none;
            }
            amp-sidebar nav span {
              color: #eee;
              display: block;
              margin-bottom: 20px;
              font-weight: 700;
              font-size: 16px;
            }
            amp-sidebar nav .amp-sidebar__toggleBtn {
              background: none;
              color: #fff;
              font-size: 32px;
              position: absolute;
              right: 25px;
              top: 10px;
            }
            amp-sidebar .amp-sidebar__social {
              display: flex;
              margin-top: 30px;
            }
            amp-sidebar .amp-sidebar__social a {
              font-size: 0;
              margin-right: 15px;
            }
            amp-sidebar .amp-sidebar__social svg .telegram-svg-social {
              fill: #fff;
            }
            amp-sidebar .amp-sidebar__social svg .twitter-svg-social {
              fill: #fff;
            }
            amp-sidebar .amp-sidebar__social svg .yadzen-svg-social {
              fill: #fff;
            }
            amp-sidebar .amp-sidebar__social svg .yadzen-svg-social_black {
              fill: black;
            }
          `}
        </style>
      </Helmet>
      <header style={{ height: 60 }}>
        <div className="header-content amp">
          <div className="header-content__logo">
            <LogoIcon />
            <a href='/'>devthread.ru</a>
          </div>
          <button tabindex="0" on='tap:sidebar-header' aria-label="menu" className="header-content__button mobile">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <amp-sidebar id="sidebar-header" layout="nodisplay" side="left">
        <nav>
          <div role='button' tabindex="0" on='tap:sidebar-header.toggle' aria-label="menu" className='amp-sidebar__toggleBtn'>
            ✕
          </div>
          <span>{title}</span>
          <ul>
            {menuLinks.map((page, i) => {
              return (
                <li key={i}>
                  <a href={page.link}>{page.name}</a>
                </li>
              )
            })}
          </ul>
          <div className="amp-sidebar__social">
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
          </div>
        </nav>
      </amp-sidebar>
    </>
  )
}

export { HeaderAMP }