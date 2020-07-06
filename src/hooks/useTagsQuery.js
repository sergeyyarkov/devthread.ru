import { useStaticQuery, graphql } from 'gatsby'

const useTagsQuery = () => {
  const { allMarkdownRemark: { edges } } = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "tag"}}}) {
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
  return { edges }
}

export default useTagsQuery