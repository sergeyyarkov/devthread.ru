import React from "react"
import { Link, graphql } from 'gatsby'
import { Main } from '../ui/ui'
import { Grid, Row, Col } from 'react-flexbox-grid'
import useSiteMetadataQuery from '../hooks/useSiteMetadataQuery'
import useSnippetsQuery from '../hooks/useSnippetsQuery'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Articles from '../components/Articles/Articles'
import Snippets from '../components/Snippets/Snippets'
import SnippetItem from '../components/Snippets/SnippetItem/SnippetItem'
import Offers from '../components/Offers/Offers'

const IndexPage = ({ data: { allMarkdownRemark: edges } }) => {
  const { siteMetadata: { options: { articles: { onPage } } } } = useSiteMetadataQuery()
  const { snippets } = useSnippetsQuery()
  let [limit, setLimit] = React.useState(onPage)

  return (
    <Layout>
      <SEO />
      <Main>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <div className="articles">
                <div className="articles-heading">
                  <h1>Последние статьи</h1>
                  <Link to='/articles'>смотреть все</Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={9} xs={12}>
              <Articles data={edges} limit={limit} setLimit={setLimit} /> 
              <Snippets>
                <h2>Сниппеты</h2>
                {snippets.map(({ node: { frontmatter } }, i) => 
                  <SnippetItem 
                    key={i} 
                    slug={frontmatter.slug} 
                    title={frontmatter.title} 
                    date={frontmatter.date} 
                    tags={frontmatter.tags} 
                  />
                )}
              </Snippets>
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
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "article"}}}, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            slug
            title
            image {
              childImageSharp {
                fluid(maxWidth: 960) {
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
