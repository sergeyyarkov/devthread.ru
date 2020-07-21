import { useStaticQuery, graphql } from "gatsby"

const useSnippetsQuery = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "snippet" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              tags
              description
              date(formatString: "D MMMM YYYY", locale: "ru-RU")
            }
          }
        }
      }
    }
  `)

  return { snippets: edges }
}

export default useSnippetsQuery
