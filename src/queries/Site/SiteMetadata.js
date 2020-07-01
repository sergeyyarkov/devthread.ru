const SiteMetadata_query = `
  {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
  }
`
export default SiteMetadata_query