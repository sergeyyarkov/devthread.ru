import React from 'react';
import ArticleCard from './ArticleCard/ArticleCard'
import './Articles.scss'

const Articles = ({ data: { edges } }) => {
  return (
    <div className="articles">
      <div className="articles-content">
        {edges.map(({ node }, e) => <ArticleCard key={e} data={node.frontmatter} />)}
      </div>
    </div>
  )
}

export default Articles