import React from 'react';
import useSiteMetadataQuery from '../../hooks/useSiteMetadataQuery'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

const SEO = ({ title, description }) => {
  const { pathname } = useLocation()
  const { siteMetadata } = useSiteMetadataQuery()

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    url: `${siteMetadata.siteUrl}${pathname}`
  }

  return (
    <Helmet title={seo.title} titleTemplate={siteMetadata.titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
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

