import { useStaticQuery, graphql } from "gatsby"

const useMoreArticlesQuery = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "article" } } }
        sort: { order: DESC, fields: frontmatter___date }
        limit: 6
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 650, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
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
