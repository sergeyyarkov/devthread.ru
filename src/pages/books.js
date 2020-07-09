import React from "react"
import { Main } from '../ui/ui'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { graphql } from 'gatsby'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Books from '../components/Books/Books'
import Offers from '../components/Offers/Offers'
import Newsletter from '../components/Newsletter/Newsletter'

import BooksIcon from '../images/books-icon__large.svg'

const BooksPage = ({ data: { allMarkdownRemark: edges } }) => {
  return (
    <Layout>
      <SEO title='Ресурсы' />
      <Main>
        <Grid fluid>
          <Row>
            <Col lg={9} xs={12}>
              <div className="books">
                <div className="books-heading">
                  <BooksIcon />
                  <h1>Что почитать</h1>
                </div>
                <div className="books-description">
                  <p>
                    Здесь представлен список книг по программированию, которые стоило бы прочитать
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={9} xs={12}>
              <Books data={edges} />
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

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "book"}}}) {
      edges {
        node {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
  }
`

export default BooksPage
