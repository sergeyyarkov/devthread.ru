import React from 'react';
import { Link } from 'gatsby'

const Categories = ({ children }) => {
  return (
    <div className="articles-categories">
      <div className="tag-item">
        <Link to='/articles'>Все</Link>
      </div>
      {children}
    </div>
  )
}

export default Categories