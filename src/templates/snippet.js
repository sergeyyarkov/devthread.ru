import React from "react"
import { Main } from "../ui/ui"
import { Grid, Row, Col } from "react-flexbox-grid"
import SEO from "../components/SEO/SEO"
import Snippet from "../components/Snippet/Snippet"
import { graphql } from "gatsby"

const snippetTemplate = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => {
  return (
    <>
      <SEO
        title={frontmatter.title}
        titleTemplate={false}
        description={frontmatter.description}
        keywords={frontmatter.keywords.join(", ")}
        type="article"
      />
      <Main>
        <Grid fluid style={{ maxWidth: 900 }}>
          <Row>
            <Col lg={12}>
              <Snippet data={frontmatter} html={html} />
            </Col>
          </Row>
        </Grid>
      </Main>
    </>
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
