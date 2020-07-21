import React from "react"
import { Main } from "../ui/ui"
import { Grid, Row, Col } from "react-flexbox-grid"
import Snippet from "../components/Snippet/Snippet"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

const snippetTemplate = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => {
  return (
    <Layout>
      <Main>
        <Grid fluid style={{ maxWidth: 900 }}>
          <Row>
            <Col lg={12}>
              <Snippet data={frontmatter} html={html} />
            </Col>
          </Row>
        </Grid>
      </Main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Snippet($slug: String!) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug }, templateKey: { eq: "snippet" } }
    ) {
      html
      frontmatter {
        slug
        keywords
        title
        description
        date(formatString: "D MMMM YYYY", locale: "ru-RU")
      }
    }
  }
`

export default snippetTemplate
