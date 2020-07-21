import React from "react"
import { Link } from "gatsby"

const SnippetItem = ({ slug, title, date, tags }) => {
  return (
    <div className="snippet-item">
      <div className="left-info">
        <div className="snippet-item__date">{date}</div>
        <div className="snippet-item__heading">
          <Link to={`/snippet/${slug}`}>{title}</Link>
        </div>
      </div>
      <div className="right-info">
        <div className="snippet-item__tags">
          {tags.map((tag, i) => (
            <div key={i} className="tag-item">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SnippetItem
