import { useStaticQuery, graphql } from 'gatsby'

const usePopularArticlesQuery = () => {
  const { allMarkdownRemark: { edges } } = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "article"}, popular: {eq: true}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 5) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `)
  return { articles: edges }
}

export default usePopularArticlesQuery