import React from 'react';
import PropTypes from 'prop-types'
import useSiteMetadataQuery from '../../hooks/useSiteMetadataQuery'
import ArticleCard from './ArticleCard/ArticleCard'

const Articles = ({ data: { edges }, limit = 6, setLimit = () => null }) => {
  const { siteMetadata: { options: { articles: { onLoadMore } } } } = useSiteMetadataQuery()
  return (
    <>
      <div className="articles">
        <div className="articles-content">
          {edges.length <= 0
            ? <p>Записей нет</p>
            : edges.map(({ node }, i) => {
                if (i < limit) {
                  return <ArticleCard key={i} data={node.frontmatter} />
                }
                return null
              })
          }
        </div>
        <div className="articles-loadMore">
          {edges.length === limit || edges.length <= limit 
            ? null
            : <button className='btn-loadMore' onClick={() => setLimit(limit + onLoadMore)}>Загрузить еще&nbsp;&nbsp;<span role='img' aria-label='load more'>👇</span></button>
          }
        </div>
      </div>
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