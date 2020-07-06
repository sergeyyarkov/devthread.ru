import React from 'react';
import { Link } from 'gatsby'
import sligify from '../../../helpers/slugify'

const TagItem = ({ title }) => {
  return (
    <div className="tag-item">
      <Link to={`/tag/${sligify(title)}`}>{title}</Link>
    </div>
  )
}

export default TagItem