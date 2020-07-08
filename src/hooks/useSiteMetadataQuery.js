import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          titleTemplate
          siteName
          description
          siteUrl: url
          menuLinks {
            name
            link
          }
          social {
            email
            telegram
            twitter
            yadzen
          }
        }
      }
    }
  `)
  return { siteMetadata }
}

export default useSiteMetadata