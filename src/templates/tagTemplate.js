import React from "react"
import { Main } from '../ui/ui'
import { Grid, Row, Col } from 'react-flexbox-grid'
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

const TagPage = ({ data: { allMarkdownRemark: edges }, pageContext: { title } }) => {
  const { categories } = useCategoriesQuery()
  return (
    <Layout>
      <SEO title={title} />
      <Main>
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
                <div className="articles-info">
                  <p>Показано {edges.edges.length} по тегу "{title}"</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={9} xs={12}>
              <Articles data={edges} /> 
              <Newsletter />
            </Col>
            <Col lg={3} xs={12}>
              <Offers /> 
            </Col>
          </Row>
        </Grid>
      </Main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query articlesByTag($title: [String!]) {
    allMarkdownRemark(filter: {frontmatter: {tags: {in: $title}}}) {
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

export default TagPage
