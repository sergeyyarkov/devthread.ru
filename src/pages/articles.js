import React from "react"
import { graphql } from 'gatsby'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Articles from '../components/Articles/Articles'
import Categories from '../components/Articles/Categories/Categories'
import Search from '../components/Articles/Search/Search'
import Offers from '../components/Offers/Offers'
import Newsletter from '../components/Newsletter/Newsletter'

const ArticlesPage = ({ data: { allMarkdownRemark: edges } }) => {
  return (
    <Layout>
      <SEO title='Статьи' />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <div className="articles">
                <div className="articles-heading">
                  <h1>Статьи</h1>
                </div>
                <Categories />
                <Search articlesLength={edges.edges.length} />
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

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "article"}}}) {
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

export default ArticlesPage
