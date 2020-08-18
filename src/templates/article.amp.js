import React from "react"
import { Main } from "../ui/ui"
import { Grid, Row, Col } from "react-flexbox-grid"
import SEO from "../components/SEO/SEO"
import Article from "../components/Article/Article"
import MoreArticles from "../components/Articles/MoreArticles/MoreArticles"
import Newsletter from "../components/Newsletter/Newsletter"
import { graphql } from "gatsby"

const articleTemplateAmp = ({
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
        url={`${siteUrl}/article/${frontmatter.slug}/`}
        canonical={`${siteUrl}/article/${frontmatter.slug}/`}
        amp={true}
      />
      <Main>
        <Grid fluid style={{ maxWidth: 800 }}>
          <Row>
            <Col xs={12}>
              <Article data={frontmatter} html={html} amp={true} />
              <Newsletter />
              <MoreArticles amp={true} />
            </Col>
          </Row>
        </Grid>
      </Main>
    </>
  )
}

export const pageQuery = graphql`
  query ArticleAMP($slug: String!) {
    article: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        keywords
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1400 quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
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

export default articleTemplateAmp
