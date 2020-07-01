import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'

const NotFound = () => {
  return (
    <Layout>
      <main>
        <div className="container-fluid">
          <div className="error">
            <span>#404</span>
            <h1>страница не найдена</h1>
            <Link to='/'>вернуться на главную</Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default NotFound