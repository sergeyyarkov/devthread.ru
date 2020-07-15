import { useStaticQuery, graphql } from 'gatsby'

const useMoreArticlesQuery = () => {
  const { allMarkdownRemark: { edges } } = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "article"}}}, sort: {order: DESC, fields: frontmatter___date}, limit: 6) {
        edges {
          node {
            frontmatter {
              slug
              title
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              category
              tags
              description
            }
          }
        }
      }
    }
  `)
  return { edges }
}

export default useMoreArticlesQuery