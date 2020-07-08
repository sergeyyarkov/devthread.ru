import React from 'react';
import useSiteMetadataQuery from '../../hooks/useSiteMetadataQuery'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

const SEO = ({ title, description, image, type }) => {
  const { pathname } = useLocation()
  const { siteMetadata } = useSiteMetadataQuery()

  const seo = {
    title: title || siteMetadata.title,
    siteName: siteMetadata.siteName,
    type: type || 'website',
    image: image || 'custom image url...',
    description: description || siteMetadata.description,
    url: `${siteMetadata.siteUrl}${pathname}`
  }

  return (
    <Helmet title={seo.title} titleTemplate={siteMetadata.titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta property='og:locale' content='ru_RU' />
      <meta property="og:url" content={seo.url} />
      <meta property='og:title' content={seo.title}
      />
      <meta property='og:site_name' content={seo.siteName}
      />
      {seo.type && (
        <meta property='og:type' content={seo.type} />
      )}
      {seo.image && (
        <meta property="og:image" content={seo.image} />
      )}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      {/* <link rel="manifest" href="/site.webmanifest" /> */}
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#191919" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

SEO.defaultProps = {
  title: null,
  description: null
}

