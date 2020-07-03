import React from "react"
import { Link, graphql } from 'gatsby'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Articles from '../components/Articles/Articles'
import Offers from '../components/Offers/Offers'
import Newsletter from '../components/Newsletter/Newsletter'

const ArticlesPage = ({ data: { allMarkdownRemark: edges } }) => {
  return (
    <Layout>
      <SEO title='Статьи' />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <div className="articles">
                <div className="articles-heading">
                  <h1>Статьи</h1>
                </div>
                <div className="articles-categories">
                  <div className="tag-item">
                    <Link to='/'>Все</Link>
                  </div>
                  <div className="tag-item">
                    <Link to='/'>Javascript</Link>
                  </div>
                  <div className="tag-item">
                    <Link to='/'>GraphQL</Link>
                  </div>
                  <div className="tag-item">
                    <Link to='/'>Reactjs</Link>
                  </div>
                  <div className="tag-item">
                    <Link to='/'>SEO оптимизация</Link>
                  </div>
                  <div className="tag-item">
                    <Link to='/'>Web разработка</Link>
                  </div>
                  <div className="tag-item">
                    <Link to='/'>pet-проекты</Link>
                  </div>
                  <div className="tag-item">
                    <Link to='/'>Nodejs</Link>
                  </div>
                  <div className="tag-item">
                    <Link to='/'>ООП</Link>
                  </div>
                  <div className="tag-item">
                    <Link to='/'>Новости</Link>
                  </div>
                </div>
                <div className="articles-search">
                  <input placeholder="Напишите сюда чтобы отфильтровать статьи" type="text" />
                  <span>278</span>
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

export default ArticlesPage
