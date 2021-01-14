import "firebase/database"
import React from "react"
import Layout from "./src/components/Layout/Layout"

import "prismjs/themes/prism-tomorrow.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "./src/styles/global.scss"

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
