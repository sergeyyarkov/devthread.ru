import React from "react"
import { Main } from "../ui/ui"
import { Grid, Row, Col } from "react-flexbox-grid"
import SEO from "../components/SEO/SEO"
import Article from "../components/Article/Article"
import Offers from "../components/Offers/Offers"
import MoreArticles from "../components/Articles/MoreArticles/MoreArticles"
import Newsletter from "../components/Newsletter/Newsletter"
import { graphql } from "gatsby"

const articleTemplate = ({
  data: {
    article: { frontmatter, html },
    site: {
      siteMetadata: { siteUrl },
    },
  },
}) => {
  return (
    <>
      <SEO
        title={frontmatter.title}
        titleTemplate={false}
        keywords={frontmatter.keywords.join(", ")}
        description={frontmatter.description}
        image={`${siteUrl}${frontmatter.image.childImageSharp.fluid.src}`}
        type="article"
      />
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
    </>
  )
}

export const pageQuery = graphql`
  query Article($slug: String!) {
    article: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        keywords
        title
        image {
          childImageSharp {
            fluid(maxWidth: 880 quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        time
        tags
        description
        date(formatString: "D MMMM YYYY", locale: "ru-RU")
        category
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default articleTemplate
