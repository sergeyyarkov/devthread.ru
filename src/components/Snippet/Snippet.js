import React from "react"
import PropTypes from "prop-types"
import SEO from "../SEO/SEO"

const Snippet = ({ data: { keywords, description, title, date }, html }) => {
  return (
    <>
      <SEO
        title={title}
        titleTemplate={false}
        description={description}
        keywords={keywords.join(", ")}
        type="article"
      />
      <div className="snippet">
        <article>
          <div className="snippet-date">{date}</div>
          <div className="snippet-heading">
            <h1>{title}</h1>
          </div>
          <div className="snippet-description">
            <p>{description}</p>
          </div>
          <div className="snippet-inner inner">
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
          <div className="snippet-comments">
            <div className="snippet-comments__heading">
              <h2>Комментарии</h2>
            </div>
            <div className="snippet-comments__content"></div>
          </div>
        </article>
      </div>
    </>
  )
}

export default Snippet

Snippet.propTypes = {
  data: PropTypes.shape({
    keywords: PropTypes.array,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
  }),
  html: PropTypes.string,
}
