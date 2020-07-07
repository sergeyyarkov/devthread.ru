import React from 'react';
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import slugify from '../../../helpers/slugify'

const CategoryItem = ({ title }) => {
  const { pathname } = useLocation()
  return (
    <div className={pathname === `/category/${slugify(title)}` ? 'tag-item active' : 'tag-item'}>
      <Link to={`/category/${slugify(title)}`}>{title}</Link>
    </div>
  )
}

export default CategoryItem

