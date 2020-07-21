import React from "react"

import TagIcon from "../../../images/tag-icon.svg"

const Tags = ({ children }) => {
  return (
    <div className="offers-tags offer-box">
      <div className="offers-tags__heading offer-heading">
        <TagIcon />
        Тэги
      </div>
      <div className="offers-tags__content">{children}</div>
    </div>
  )
}

export default Tags
