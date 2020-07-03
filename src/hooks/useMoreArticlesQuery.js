import { useStaticQuery, graphql } from 'gatsby'

const useMoreArticlesQuery = () => {
  const { allMarkdownRemark: { edges } } = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "article"}}}, limit: 4) {
        edges {
          node {
            frontmatter {
              slug
              title
              image
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