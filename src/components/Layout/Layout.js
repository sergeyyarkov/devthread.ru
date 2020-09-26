import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import { HeaderAMP } from "../../lib/amp"

const Layout = ({ children, amp }) => {
  /*
    amp is accelerated mobile pages
  */

  if (!amp) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <HeaderAMP />
        {children}
        <Footer amp={true} />
      </>
    )
  }
}

export default Layout
