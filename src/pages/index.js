import React from "react"
import { Link, graphql } from 'gatsby'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Description from '../components/Description/Description'
import Articles from '../components/Articles/Articles'
import Offers from '../components/Offers/Offers'
import Newsletter from '../components/Newsletter/Newsletter'

import ArrowNext from '../images/arrow-next.svg'

import { Grid, Row, Col } from 'react-flexbox-grid'

const IndexPage = ({ data: { allMarkdownRemark: edges } }) => {
  return (
    <Layout>
      <SEO />
      <Description />
      <main>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <div className="articles">
                <div className="articles-heading">
                  <h3>Последние статьи</h3>
                  <Link to='/articles'>смотреть все <ArrowNext /></Link>
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
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "article"}}}, sort: {order: DESC, fields: frontmatter___date}, limit: 10) {
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

export default IndexPage
