import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import sligify from "../../../helpers/slugify"

const TagItem = ({ title }) => {
  return (
    <div className="tag-item">
      <Link to={`/tag/${sligify(title)}`}>{title}</Link>
    </div>
  )
}

export default TagItem

TagItem.propTypes = {
  title: PropTypes.string,
}
