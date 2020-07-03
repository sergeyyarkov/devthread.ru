import React from 'react'
import Layout from '../components/Layout/Layout'
import Article from '../components/Article/Article'
import Offers from '../components/Offers/Offers'
import MoreArticles from '../components/Articles/MoreArticles/MoreArticles'
import Newsletter from '../components/Newsletter/Newsletter'
import { graphql } from "gatsby"

export default function Template ({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(markdownRemark.frontmatter)
  return (
    <Layout>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <Article data={frontmatter} html={html} />
              <Newsletter />
              <MoreArticles />
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

export const pageQuery = graphql`
  query Article($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        slug
        title
        time
        tags
        description
        date
        category
      }
    }
  }
`