import React from "react"
import { Link, graphql } from 'gatsby'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Description from '../components/Description/Description'
import Articles from '../components/Articles/Articles'
import Offers from '../components/Offers/Offers'
import Newsletter from '../components/Newsletter/Newsletter'

import ArrowNext from '../images/arrow-next.svg'

const IndexPage = ({ data: { allMarkdownRemark: edges } }) => {
  return (
    <Layout>
      <SEO />
      <Description />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <div className="articles">
                <div className="articles-heading">
                  <h3>Последние статьи</h3>
                  <Link to='/articles'>смотреть все <ArrowNext /></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <Articles data={edges} /> 
              <Newsletter />
            </div>
            <div className="col-md-3 col-xs-12">
              <Offers /> 
            </div>
          </div>
        </div>
      </main>
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
