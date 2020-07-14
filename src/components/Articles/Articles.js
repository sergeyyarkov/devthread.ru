import React from 'react';
import PropTypes from 'prop-types'
import ArticleCard from './ArticleCard/ArticleCard'
import Newsletter from '../Newsletter/Newsletter'

const Articles = ({ data: { edges }, limit = 6 }) => {
  return (
    <>
      <div className="articles">
        <div className="articles-content">
          {edges.map(({ node }, i) => {
            if (i < limit) {
              return <ArticleCard key={i} data={node.frontmatter} />
            }
            return null
          })}
        </div>
      </div>
      <Newsletter />
    </>
  )
}

export default Articles

Articles.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.array
  })
}