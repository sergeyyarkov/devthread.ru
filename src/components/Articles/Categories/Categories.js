import React from 'react';
import { Link } from 'gatsby'

const Categories = ({ children, pathname }) => {
  return (
    <div className="articles-categories">
      <div className={pathname === `/articles` ? 'tag-item active' : 'tag-item'}>
        <Link to='/articles'>Все</Link>
      </div>
      {children}
    </div>
  )
}

export default Categories