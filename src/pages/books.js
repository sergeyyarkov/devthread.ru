import React from "react"
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Books from '../components/Books/Books'
import Offers from '../components/Offers/Offers'
import Newsletter from '../components/Newsletter/Newsletter'

import BooksIcon from '../images/books-icon__large.svg'

const BooksPage = () => {
  return (
    <Layout>
      <SEO title='Ресурсы' />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <div className="books">
                <div className="books-heading">
                    <BooksIcon />
                    <h1>Что почитать</h1>
                </div>
                <div className="books-description">
                  <p>
                    Здесь представлен список книг по программированию, которые стоило бы прочитать
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <Books />
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

export default BooksPage
