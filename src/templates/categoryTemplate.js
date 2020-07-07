import React from "react"
import { graphql } from 'gatsby'
import useCategoriesQuery from '../hooks/useCategoriesQuery'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Articles from '../components/Articles/Articles'
import Search from '../components/Articles/Search/Search'
import Categories from '../components/Articles/Categories/Categories'
import CategoryItem from '../components/Articles/Categories/CategoryItem'
import Offers from '../components/Offers/Offers'
import Newsletter from '../components/Newsletter/Newsletter'

const CategoryPage = ({ data: { allMarkdownRemark: edges }, pageContext: { title } }) => {
  const { categories } = useCategoriesQuery()
  return (
    <Layout>
      <SEO title={title} />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <div className="articles">
                <div className="articles-heading">
                  <h1>Статьи</h1>
                </div>
                <Categories>
                  {categories.map(({ node }, i) => <CategoryItem key={i} title={node.frontmatter.title} />)}
                </Categories>
                <Search articlesLength={edges.edges.length} />
                <div className="articles-info">
                  <p>Показано {edges.edges.length} из категории "{title}"</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <Articles data={edges} /> 
              <Newsletter />
            </div>
            <div className="col-md-3 col-xs-12">
              <Offers /> 
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query articlesByCategory($title: String!) {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: $title}}}) {
      edges {
        node {
          frontmatter {
            slug
            title
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            category
            tags
            description
          }
        }
      }
    }
  }
`

export default CategoryPage
