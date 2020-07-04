import React from 'react';
import { Link } from 'gatsby'
import slugify from '../../../helpers/slugify'
import useCategoriesQuery from '../../../hooks/useCategoriesQuery'

const Categories = () => {
  const { edges } = useCategoriesQuery()
  return (
    <div className="articles-categories">
      <div className="tag-item">
        <Link to='/articles'>Все</Link>
      </div>
      {edges.map(({ node }, i) => <div key={i} className="tag-item">
        <Link to={`/category/${slugify(node.frontmatter.title)}`}>{node.frontmatter.title}</Link>
      </div>)}
    </div>
  )
}

export default Categories