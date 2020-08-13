import React from "react"
import useSiteMetadataQuery from "../../hooks/useSiteMetadataQuery"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

const SEO = ({
  title,
  titleTemplate,
  keywords,
  description,
  image,
  type,
  canonical,
  url
}) => {
  const { pathname } = useLocation()
  const { siteMetadata } = useSiteMetadataQuery()

  const seo = {
    title: title || siteMetadata.title,
    titleTemplate: true,
    siteName: siteMetadata.siteName,
    type: type || "website",
    image: image || "custom image url...",
    description: description || siteMetadata.description,
    keywords: keywords || siteMetadata.keywords,
    url: url || `${siteMetadata.siteUrl}${pathname}`,
    canonical: canonical || `${siteMetadata.siteUrl}${pathname}`,
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={
        titleTemplate === false ? null : siteMetadata.titleTemplate
      }
    >
      <html lang="ru" />
      <meta name="mailru-domain" content="1a4ttvvN3ScSGnPZ" />
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:site_name" content={seo.siteName} />
      {seo.type && <meta property="og:type" content={seo.type} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      <link rel="canonical" href={seo.canonical} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#191919" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Organization",
          name: "devthread",
          url: siteMetadata.siteUrl,
          sameAs: [siteMetadata.social.twitter],
        })}
      </script>
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.bool,
  keywords: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  canonical: PropTypes.string,
}
