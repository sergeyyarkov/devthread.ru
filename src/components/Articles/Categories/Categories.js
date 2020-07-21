import React from "react"
import PropTypes from "prop-types"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"

const Categories = ({ children, setQuery = () => null }) => {
  const { search, pathname } = useLocation()
  return (
    <div className="articles-categories">
      <div
        className={
          pathname === `/articles` ||
          (pathname === `/articles/` && search === "")
            ? "tag-item active"
            : "tag-item"
        }
      >
        <Link onClick={() => setQuery("")} to="/articles">
          Все
        </Link>
      </div>
      {children}
    </div>
  )
}

export default Categories

Categories.propTypes = {
  setQuery: PropTypes.func,
}
