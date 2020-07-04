const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve('src/templates/articleTemplate.js')

  return graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "article"}}}) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    } 
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `article/${node.frontmatter.slug}`,
        component: articleTemplate,
        context: {
          slug: node.frontmatter.slug
        },
      });
    });

  })
}

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};