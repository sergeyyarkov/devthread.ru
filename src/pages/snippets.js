import React from "react"
import { graphql } from "gatsby"
import { Main } from "../ui/ui"
import { Grid, Row, Col } from "react-flexbox-grid"
import SEO from "../components/SEO/SEO"
import Snippets from "../components/Snippets/Snippets"
import SnippetItem from "../components/Snippets/SnippetItem/SnippetItem"

const SnippetsPage = ({
  data: {
    allMarkdownRemark: { snippets },
  },
}) => {
  return (
    <>
      <SEO />
      <Main>
        <Grid fluid>
          <Row>
            <Col lg={12}>
              <Snippets>
                <h1>Сниппеты</h1>
                <p>
                  Сниппеты это готовые решения некоторых проблем, которые можно
                  скопировать и вставить
                </p>
                {snippets.map(({ node: { frontmatter } }, i) => (
                  <SnippetItem
                    key={i}
                    slug={frontmatter.slug}
                    title={frontmatter.title}
                    date={frontmatter.date}
                    tags={frontmatter.tags}
                  />
                ))}
              </Snippets>
            </Col>
          </Row>
        </Grid>
      </Main>
    </>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "snippet" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      snippets: edges {
        node {
          frontmatter {
            slug
            title
            tags
            description
            date(formatString: "D MMMM YYYY", locale: "ru-RU")
          }
        }
      }
    }
  }
`

export default SnippetsPage
