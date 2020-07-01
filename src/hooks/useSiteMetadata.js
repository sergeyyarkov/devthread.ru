import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          email
          siteUrl: url
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  return { siteMetadata }
}

export default useSiteMetadata