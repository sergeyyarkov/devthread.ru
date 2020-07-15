import React from 'react';
import PropTypes from 'prop-types'
import ArticleCard from './ArticleCard/ArticleCard'
import Newsletter from '../Newsletter/Newsletter'

const Articles = ({ data: { edges }, limit = 6, setLimit = () => null }) => {
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
        <div className="articles-loadMore">
          {edges.length === limit || edges.length <= limit 
            ? null
            : <button className='btn-loadMore' onClick={() => setLimit(limit + 2)}>Загрузить еще&nbsp;&nbsp;<span role='img' aria-label='load more'>👇</span></button>
          }
        </div>
      </div>
      <Newsletter />
    </>
  )
}

export default Articles

Articles.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.array,
    limit: PropTypes.number,
    setLimit: PropTypes.func
  })
}