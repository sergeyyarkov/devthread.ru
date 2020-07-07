import React from 'react'
import useSiteMetadataQuery from '../../hooks/useSiteMetadataQuery'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  const { siteMetadata } = useSiteMetadataQuery()

  return (
    <>
      <Header title={siteMetadata.title} menuLinks={siteMetadata.menuLinks} />
        {children}
      <Footer title={siteMetadata.title} />
    </>
  )
}

export default Layout