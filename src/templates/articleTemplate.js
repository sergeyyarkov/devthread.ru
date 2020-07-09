import React from 'react'
import { Main } from '../ui/ui'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Layout from '../components/Layout/Layout'
import Article from '../components/Article/Article'
import Offers from '../components/Offers/Offers'
import MoreArticles from '../components/Articles/MoreArticles/MoreArticles'
import Newsletter from '../components/Newsletter/Newsletter'
import { graphql } from "gatsby"

const articleTemplate = ({ data: { markdownRemark: { frontmatter, html } } }) => {
  return (
    <Layout>
      <Main>
        <Grid fluid>
          <Row>
            <Col lg={9} xs={12}>
              <Article data={frontmatter} html={html} />
              <Newsletter />
              <MoreArticles />
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
  query Article($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        slug
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        time
        tags
        description
        date
        category
      }
    }
  }
`

export default articleTemplate