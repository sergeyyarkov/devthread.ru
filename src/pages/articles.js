import React from "react"
import { Main } from '../ui/ui'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { graphql } from 'gatsby'
import { useLocation } from '@reach/router'
import * as queryString from 'query-string'
import useCategoriesQuery from '../hooks/useCategoriesQuery'
import useSiteMetadataQuery from '../hooks/useSiteMetadataQuery'

import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Articles from '../components/Articles/Articles'
import Categories from '../components/Articles/Categories/Categories'
import CategoryItem from '../components/Articles/Categories/CategoryItem'
import Search from '../components/Articles/Search/Search'
import Offers from '../components/Offers/Offers'

import SearchIcon from '../images/search-icon.svg'

const ArticlesPage = ({ data: { allMarkdownRemark: edges }, }) => {
  const { categories } = useCategoriesQuery()
  const { siteMetadata: { options: { articles: { onPage } } } } = useSiteMetadataQuery()
  const { search } = useLocation()
  
  let [limit, setLimit] = React.useState(onPage)
  const [filtredArticles, setFiltredArticles] = React.useState([])
  const [query, setQuery] = React.useState(queryString.parse(search).search || '')
  
  const allArticles = edges

  const filterArticles = React.useCallback(arr => {
    return arr.filter(({ node: { frontmatter } }) => 
				frontmatter.title.toLowerCase().includes(query.toLowerCase().trim())
			||	frontmatter.description.toLowerCase().includes(query.toLowerCase().trim())
			||	frontmatter.category.toLowerCase().includes(query.toLowerCase().trim())
			||	frontmatter.tags.join('').toLowerCase().includes(query.toLowerCase().trim())
		)
  }, [query])
  

  React.useEffect(() => {
    setLimit(onPage)
    if (query !== '') setFiltredArticles(filterArticles(allArticles.edges))
  }, [setFiltredArticles, filterArticles, allArticles.edges, query, onPage])

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
                <Categories setQuery={setQuery}>
                  {categories.map(({ node }, i) => <CategoryItem key={i} title={node.frontmatter.title} />)}
                </Categories>
                <Search allArticles={allArticles.edges} filterArticles={filterArticles} articlesLength={edges.edges.length} resultsLength={filtredArticles.length} query={query} setQuery={setQuery} setFiltredArticles={setFiltredArticles} setLimit={setLimit} onPage={onPage} />
                <div className="articles-info">
                  {query && query !== ''  ? filtredArticles.length === 0 ? <p><SearchIcon />&nbsp;&nbsp;Ничего не найдено</p> : null : null}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={9} xs={12}>
              {query && query !== '' 
                ? filtredArticles.length > 0 ? <Articles data={{edges: filtredArticles}} limit={limit} setLimit={setLimit} /> : null
                : <Articles data={edges} limit={limit} setLimit={setLimit} />
              }
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
  } 
`

export default ArticlesPage
