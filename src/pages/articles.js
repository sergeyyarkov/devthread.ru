import React from "react"
import { Main } from '../ui/ui'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { graphql } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import { useLocation } from '@reach/router'
import * as queryString from 'query-string'
import toFrontmatter from '../helpers/toFrontmatter'
import useCategoriesQuery from '../hooks/useCategoriesQuery'

import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Articles from '../components/Articles/Articles'
import Categories from '../components/Articles/Categories/Categories'
import CategoryItem from '../components/Articles/Categories/CategoryItem'
import Search from '../components/Articles/Search/Search'
import Offers from '../components/Offers/Offers'
import Newsletter from '../components/Newsletter/Newsletter'

import SearchIcon from '../images/search-icon.svg'

const ArticlesPage = ({ data: { allMarkdownRemark: edges, localSearchPages }, }) => {
  const { categories } = useCategoriesQuery()
  const { search, pathname } = useLocation()
  
  const [query, setQuery] = React.useState(queryString.parse(search).search || '')

  const results = useFlexSearch(
    query,
    localSearchPages.index,
    JSON.parse(localSearchPages.store)
  )

  return (
    <Layout>
      <SEO title='Статьи' />
      <Main>
        <Grid fluid>
          <Row>
            <Col lg={9} xs={12}>
              <div className="articles">
                <div className="articles-heading">
                  <h1>Статьи</h1>
                </div>
                <Categories pathname={pathname}>
                  {categories.map(({ node }, i) => <CategoryItem key={i} title={node.frontmatter.title} />)}
                </Categories>
                <Search articlesLength={edges.edges.length} resultsLength={results.length} query={query} setQuery={setQuery} />
                <div className="articles-info">
                  {query ? results.length === 0 ? <p><SearchIcon />&nbsp;&nbsp;Ничего не найдено</p> : null : null}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={9} xs={12}>
              {query 
                ? results.length > 0 ? <Articles data={toFrontmatter(results)} /> : null
                : <Articles data={edges} />
              }
              <Newsletter />
            </Col >
            <Col lg={3} xs={12}>
              <Offers /> 
            </Col >
          </Row>
        </Grid>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "article"}}}) {
      edges {
        node {
          frontmatter {
            slug
            title
            image {
              childImageSharp {
                fluid {
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
    localSearchPages {
      index
      store
    }
  } 
`

export default ArticlesPage
