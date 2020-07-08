import React from "react"
import { Grid, Row, Col } from 'react-flexbox-grid'
import { graphql } from 'gatsby'
import useCategoriesQuery from '../hooks/useCategoriesQuery'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Articles from '../components/Articles/Articles'
import Categories from '../components/Articles/Categories/Categories'
import CategoryItem from '../components/Articles/Categories/CategoryItem'
import Search from '../components/Articles/Search/Search'
import Offers from '../components/Offers/Offers'
import Newsletter from '../components/Newsletter/Newsletter'

const ArticlesPage = ({ data: { allMarkdownRemark: edges } }) => {
  const { categories } = useCategoriesQuery()
  return (
    <Layout>
      <SEO title='Статьи' />
      <main>
        <Grid fluid>
          <Row>
            <Col lg={9} xs={12}>
              <div className="articles">
                <div className="articles-heading">
                  <h1>Статьи</h1>
                </div>
                <Categories>
                  {categories.map(({ node }, i) => <CategoryItem key={i} title={node.frontmatter.title} />)}
                </Categories>
                <Search articlesLength={edges.edges.length} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={9} xs={12}>
              <Articles data={edges} /> 
              <Newsletter />
            </Col >
            <Col lg={3} xs={12}>
              <Offers /> 
            </Col >
          </Row>
        </Grid>
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
