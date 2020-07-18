import React from 'react';
import { Link } from 'gatsby'
import useSnippetsQuery from '../../hooks/useSnippetsQuery'

const Snippets = () => {
  const { snippets } = useSnippetsQuery()
  return (
    <div className='snippets'>
      <h2>Сниппеты</h2>
      {snippets.map(({ node: { frontmatter } }, i) => (
        <div key={i} className='snippet-item'>
          <div className="left-info">
            <div className="snippet-item__date">
              {frontmatter.date}
            </div>
            <div className="snippet-item__heading">
              <Link to={`/snippet/${frontmatter.slug}`}>{frontmatter.title}</Link>
            </div>
          </div>
          <div className="right-info">
            <div className="snippet-item__tags">
              {frontmatter.tags.map((tag, i) => (
                <div key={i} className="tag-item">{tag}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Snippets