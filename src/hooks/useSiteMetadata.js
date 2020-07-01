import { useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
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
  `)
  return { siteMetadata }
}

export default useSiteMetadata