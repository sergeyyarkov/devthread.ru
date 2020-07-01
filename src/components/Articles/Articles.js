import React from 'react';
import ArticleCard from './ArticleCard/ArticleCard'
import './Articles.scss'

export default () => {
  return (
    <div className="articles">
      <div className="articles-content">
        {[1,2,3,4].map(e => <ArticleCard key={e} />)}
      </div>
    </div>
  )
}