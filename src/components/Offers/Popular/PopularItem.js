import React from 'react';
import { Link } from 'gatsby'

import ViewsIcon from '../../../images/views-icon.svg'

const PopularItem = ({ slug, title }) => {
  return (
    <div className="article-item">
      <div className="article-item__title">
        <Link to={`/article/${slug}`}>{title}</Link>
      </div>
      <div className="article-item__views">
        <ViewsIcon />
        <span>4252</span>
      </div>
    </div>
  )
}

export default PopularItem