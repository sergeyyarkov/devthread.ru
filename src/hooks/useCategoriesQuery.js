import { useStaticQuery, graphql } from "gatsby"

const useCategoriesQuery = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "category" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  return { categories: edges }
}

export default useCategoriesQuery
