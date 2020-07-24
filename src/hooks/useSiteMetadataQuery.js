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
          siteUrl
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
          gitalk {
            clientID
            clientSecret
            repo
            owner
            admin
          }
        }
      }
    }
  `)
  return { siteMetadata }
}

export default useSiteMetadata
