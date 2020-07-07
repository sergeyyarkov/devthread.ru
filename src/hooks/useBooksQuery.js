import { useStaticQuery, graphql } from 'gatsby'

const useBooksQuery = () => {
  const { allMarkdownRemark: { edges } } = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "book"}}}) {
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
  return { books: edges }
}

export default useBooksQuery