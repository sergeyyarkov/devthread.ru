import slugify from "./src/helpers/slugify"
import path from "path"

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve("src/templates/article.js")
  const articleTemplateAMP = path.resolve("src/templates/article.amp.js")
  const snippetTemplate = path.resolve("src/templates/snippet.js")
  const categoryTemplate = path.resolve("src/templates/category.js")
  const tagTemplate = path.resolve("src/templates/tag.js")

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
  const articles = all.filter(
    article => article.node.frontmatter.templateKey === "article"
  )
  const snippets = all.filter(
    snippet => snippet.node.frontmatter.templateKey === "snippet"
  )
  const categories = all.filter(
    category => category.node.frontmatter.templateKey === "category"
  )
  const tags = all.filter(tag => tag.node.frontmatter.templateKey === "tag")

  articles.forEach(({ node }) => {
    createPage({
      path: `article/${node.frontmatter.slug}/`,
      component: articleTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })

    createPage({
      path: `amp/article/${node.frontmatter.slug}/`,
      component: articleTemplateAMP,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  snippets.forEach(({ node }) => {
    createPage({
      path: `snippet/${node.frontmatter.slug}/`,
      component: snippetTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  categories.forEach(({ node }) => {
    createPage({
      path: `category/${slugify(node.frontmatter.title)}/`,
      component: categoryTemplate,
      context: {
        title: node.frontmatter.title,
      },
    })
  })

  tags.forEach(({ node }) => {
    createPage({
      path: `tag/${slugify(node.frontmatter.title)}/`,
      component: tagTemplate,
      context: {
        title: node.frontmatter.title,
      },
    })
  })
}
