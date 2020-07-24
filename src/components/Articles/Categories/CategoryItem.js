import React from "react"
import PropTypes from "prop-types"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import slugify from "../../../helpers/slugify"

const CategoryItem = ({ title }) => {
  const { pathname } = useLocation()
  return (
    <div
      className={
        pathname === `/category/${slugify(title)}` ||
        pathname === `/category/${slugify(title)}/`
          ? "tag-item active"
          : "tag-item"
      }
    >
      <Link to={`/category/${slugify(title)}/`}>{title}</Link>
    </div>
  )
}

export default CategoryItem

CategoryItem.propTypes = {
  title: PropTypes.string,
}
