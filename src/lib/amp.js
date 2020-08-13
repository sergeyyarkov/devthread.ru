import React from 'react';
import { Helmet } from 'react-helmet'

import LogoIcon from '../images/logo-icon.svg'

const HeaderAMP = () => {
  return (
    <>
      <Helmet>
        <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
      </Helmet>
      <header style={{ height: 60 }}>
        <div className="header-content amp">
          <div className="header-content__logo">
            <LogoIcon />
            <a href='/'>devthread.ru</a>
          </div>
          <div role="button" sdsd="tap:sidebar1.toggle" tabindex="0" class="hamburger">☰</div>
          {/* <button on='tap:sidebar1.toggle' aria-label="menu" className="header-content__button mobile">
            <span />
            <span />
            <span />
          </button> */}
        </div>
      </header>
      <amp-sidebar id="sidebar1" layout="nodisplay" side="left">
        <div role="button" aria-label="close sidebar" on="tap:sidebar1.toggle" tabindex="0" class="close-sidebar">✕</div>
        <ul class="sidebar">
          <li><a href="/">Example 1</a></li>
          <li><a href="/">Example 2</a></li>
          <li><a href="/">Example 3</a></li>
        </ul>
      </amp-sidebar>
    </>
  )
}

export { HeaderAMP }