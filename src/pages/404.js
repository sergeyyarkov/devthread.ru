import React from 'react';
import { Main } from '../ui/ui'
import { Grid } from 'react-flexbox-grid'
import { Link } from 'gatsby'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'

const NotFound = () => {
  return (
    <Layout>
      <SEO />
      <Main>
        <Grid fluid>
          <div className="error">
            <span>#404</span>
            <h1>страница не найдена</h1>
            <Link to='/'>вернуться на главную</Link>
          </div>
        </Grid>
      </Main>
    </Layout>
  )
}

export default NotFound