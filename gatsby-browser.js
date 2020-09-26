import "firebase/database"
import React from "react"
import Layout from "./src/components/Layout/Layout"

import "prismjs/themes/prism-tomorrow.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

import "./src/styles/global.scss"
import "./src/components/Header/Header.scss"
import "./src/components/About/About.scss"
import "./src/components/Offers/Offers.scss"
import "./src/components/Articles/Articles.scss"
import "./src/components/Articles/ArticleCard/ArticleCard.scss"
import "./src/components/Newsletter/Newsletter.scss"
import "./src/components/Article/Article.scss"
import "./src/components/Snippet/Snippet.scss"
import "./src/components/Snippets/Snippets.scss"
import "./src/components/Articles/MoreArticles/MoreArticles.scss"
import "./src/components/Books/Books.scss"
import "./src/components/Contacts/Contacts.scss"
import "./src/components/Footer/Footer.scss"

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  const { pathname } = location
  const stopScrollLinks = ["/articles/"]

  if (stopScrollLinks.includes(pathname)) return false

  return window.scrollTo(0, 0)
}

export const wrapPageElement = ({ element, props }) => {
  const {
    location: { pathname },
  } = props
  pathname.includes("/amp/article/") && props.pageContext.slug
    ? (props.amp = true)
    : (props.amp = false)

  return <Layout {...props}>{element}</Layout>
}
