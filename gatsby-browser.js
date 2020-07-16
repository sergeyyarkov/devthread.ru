import 'firebase/database';
import React from "react"
import './src/styles/global.scss'
import './src/components/Header/Header.scss'
import './src/components/About/About.scss'
import './src/components/Offers/Offers.scss'
import './src/components/Articles/Articles.scss'
import './src/components/Articles/ArticleCard/ArticleCard.scss'
import './src/components/Newsletter/Newsletter.scss'
import './src/components/Article/Article.scss'
import './src/components/Articles/MoreArticles/MoreArticles.scss'
import './src/components/Books/Books.scss'
import './src/components/Contacts/Contacts.scss'
import './src/components/Footer/Footer.scss'

import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import { ThemeProvider } from "./src/context/ThemeContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

export const shouldUpdateScroll = ({
  routerProps: { location }
}) => {
  const { pathname } = location
  const scrollToTopRoutes = [`/`, `/about`, '/contacts', '/books', '/articles']

  if (scrollToTopRoutes.indexOf(pathname) !== -1) window.scrollTo(0, 0)

  return false
}