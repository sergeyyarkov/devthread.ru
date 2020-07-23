import React from "react"
import PropTypes from "prop-types"
import { useLocation } from "@reach/router"
import GitalkComponent from "gitalk/dist/gitalk-component"
import useSiteMetadataQuery from "../../hooks/useSiteMetadataQuery"

const Snippet = ({ data: { description, title, date }, html }) => {
  const {
    siteMetadata: {
      gitalk: { clientID, clientSecret, repo, owner, admin },
    },
  } = useSiteMetadataQuery()
  const { pathname } = useLocation()
  const [readyComments, setReadyComments] = React.useState(false)

  React.useEffect(() => setReadyComments(true), [setReadyComments])

  return (
    <>
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
              {readyComments ? (
                <GitalkComponent
                  options={{
                    clientID,
                    clientSecret,
                    repo,
                    owner,
                    admin: admin.split(","),
                    language: "ru",
                    id: pathname,
                    title: title,
                  }}
                />
              ) : null}
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
