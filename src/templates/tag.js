import React from "react"
import { Main } from "../ui/ui"
import { Grid, Row, Col } from "react-flexbox-grid"
import { graphql } from "gatsby"
import useSiteMetadataQuery from "../hooks/useSiteMetadataQuery"
import useCategoriesQuery from "../hooks/useCategoriesQuery"
import SEO from "../components/SEO/SEO"
import Articles from "../components/Articles/Articles"
import Categories from "../components/Articles/Categories/Categories"
import CategoryItem from "../components/Articles/Categories/CategoryItem"
import Offers from "../components/Offers/Offers"

const TagPage = ({
  data: { allMarkdownRemark: edges },
  pageContext: { title },
}) => {
  const { categories } = useCategoriesQuery()
  const {
    siteMetadata: {
      siteUrl,
      options: {
        articles: { onPage },
      },
    },
  } = useSiteMetadataQuery()

  let [limit, setLimit] = React.useState(onPage)

  return (
    <>
      <SEO title={title} canonical={`${siteUrl}/articles`} />
      <Main>
        <Grid fluid>
          <Row>
            <Col lg={9} xs={12}>
              <div className="articles">
                <div className="articles-heading">
                  <h1>
                    Тэг: <u>{title}</u>
                  </h1>
                </div>
                <Categories>
                  {categories.map(({ node }, i) => (
                    <CategoryItem key={i} title={node.frontmatter.title} />
                  ))}
                </Categories>
                <div className="articles-info">
                  <p>
                    Найдено {edges.edges.length} по тегу "{title}"
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={9} xs={12}>
              <Articles data={edges} limit={limit} setLimit={setLimit} />
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
  query articlesByTag($title: [String!]) {
    allMarkdownRemark(
      filter: {
        frontmatter: { tags: { in: $title }, templateKey: { eq: "article" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            image {
              childImageSharp {
                fluid(maxWidth: 650, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
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
