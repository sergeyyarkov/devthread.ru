import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const PopularItem = ({ slug, title }) => {
  return (
    <div className="article-item">
      <div className="article-item__title">
        <Link to={`/article/${slug}`}>{title}</Link>
      </div>
      <div className="article-item__views">
      </div>
    </div>
  )
}

export default PopularItem

PopularItem.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string
}