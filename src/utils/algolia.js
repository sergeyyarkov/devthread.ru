const articlesQuery = `
  {
    articles: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "article" } } }) {
      nodes {
        id
        frontmatter {
          slug
          title
          category
          image {
            childImageSharp {
              fluid(maxWidth: 960) {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
          tags
          description
        }
      }
    }
  }
`

const flatten = arr =>
  arr.map(({ frontmatter, ...rest }) => ({
    ...frontmatter,
    ...rest,
	}))

const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
	{
		query: articlesQuery,
		transformer: (({ data }) => flatten(data.articles.nodes)),
		indexName: 'Articles',
		settings
	}
]

module.exports = queries