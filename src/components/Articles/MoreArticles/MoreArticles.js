import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard'
import './MoreArticles.scss'

const MoreArticles = () => {
  return (
    <div className="more-articles">
      <div className="more-articles__heading">
        <h2>Вам также может понравится...</h2>
      </div>
      <div className="more-articles__content">
        {[1,2,3,4].map(e => <ArticleCard key={e} />)}
      </div>
    </div>
  )
}

export default MoreArticles