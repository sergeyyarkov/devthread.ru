import React from 'react'
import { Link } from 'gatsby'
import sligify from '../../../helpers/slugify'
import useTagsQuery from '../../../hooks/useTagsQuery'

import TagIcon from '../../../images/tag-icon.svg'

const TagItem = ({ title }) => {
  return (
    <div className="tag-item">
      <Link to={`/tag/${sligify(title)}`}>{title}</Link>
    </div>
  )
}

const Tags = () => {
  const { edges } = useTagsQuery()

  return (
    <div className="offers-tags offer-box">
      <div className="offers-tags__heading offer-heading">
        <TagIcon />
        Тэги
      </div>
      <div className="offers-tags__content">
        {edges.map(({ node }, i) => <TagItem key={i} title={node.frontmatter.title} />)}
      </div>
    </div>
  )
}

export default Tags