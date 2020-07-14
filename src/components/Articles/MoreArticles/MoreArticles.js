import React from 'react';
import { useLocation } from '@reach/router'
import useMoreArticlesQuery from '../../../hooks/useMoreArticlesQuery'
import ArticleCard from '../ArticleCard/ArticleCard'

const MoreArticles = () => {
  const { edges } = useMoreArticlesQuery()
  const { pathname } = useLocation()
  const query = pathname.split('/')[pathname.split('/').length - 1]

  return (
    <div className="more-articles">
      <div className="more-articles__heading">
        <h2>Вам также может понравится...</h2>
      </div>
      <div className="more-articles__content">
        {edges.map(({ node }, e) => {
          if (node.frontmatter.slug !== query) {
            return <ArticleCard key={e} data={node.frontmatter} />
          }
          return null
        })}
      </div>
    </div>
  )
}

export default MoreArticles