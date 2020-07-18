import React from "react"
import { Main } from '../ui/ui'
import { Grid, Row, Col } from 'react-flexbox-grid'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Snippets from '../components/Snippets/Snippets'

const SnippetsPage = () => {
  return (
    <Layout>
      <SEO />
      <Main>
        <Grid fluid>
          <Row>
            <Col lg={12}>
              <Snippets />
            </Col>
          </Row>
        </Grid>
      </Main>
    </Layout>
  )
}

export default SnippetsPage
