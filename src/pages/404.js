import React from 'react';
import { Grid } from 'react-flexbox-grid'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'

const NotFound = () => {
  return (
    <Layout>
      <main>
        <Grid fluid>
          <div className="error">
            <span>#404</span>
            <h1>страница не найдена</h1>
            <Link to='/'>вернуться на главную</Link>
          </div>
        </Grid>
      </main>
    </Layout>
  )
}

export default NotFound