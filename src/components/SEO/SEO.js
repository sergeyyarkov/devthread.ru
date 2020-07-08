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

