import slugify from './src/helpers/slugify'
import { fmImagesToRelative } from 'gatsby-remark-relative-images'
import path from 'path'

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve('src/templates/articleTemplate.js')
  const categoryTemplate = path.resolve('src/templates/categoryTemplate.js')

  const result = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                templateKey
                slug
                title
              }
            }
          }
        }
      } 
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const all = result.data.allMarkdownRemark.edges
  const articles = all.filter(article => article.node.frontmatter.templateKey === 'article')
  const categories = all.filter(category => category.node.frontmatter.templateKey === 'category')

  articles.forEach(({ node }) => {
    createPage({
      path: `article/${node.frontmatter.slug}`,
      component: articleTemplate,
      context: {
        slug: node.frontmatter.slug
      },
    });
  });

  categories.forEach(({ node }) => {
    createPage({
      path: `category/${slugify(node.frontmatter.title)}`,
      component: categoryTemplate,
      context: {
        title: node.frontmatter.title
      },
    });
  })
}

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};
