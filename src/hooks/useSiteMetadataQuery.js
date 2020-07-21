import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          keywords
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
          options {
            articles {
              onPage
              onLoadMore
            }
          }
        }
      }
    }
  `)
  return { siteMetadata }
}

export default useSiteMetadata
