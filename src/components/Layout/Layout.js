import React from 'react'
import useSiteMetadata from '../../hooks/useSiteMetadata'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  const { siteMetadata } = useSiteMetadata()

  return (
    <>
      <Header title={siteMetadata.title} menuLinks={siteMetadata.menuLinks} />
      {children}
      <Footer title={siteMetadata.title} />
    </>
  )
}

export default Layout