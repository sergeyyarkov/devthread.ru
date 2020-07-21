import React from "react"
import { navigate } from "gatsby"
import PropTypes from "prop-types"

const Search = ({
  allArticles,
  filterArticles,
  articlesLength,
  resultsLength,
  query,
  setQuery,
  setFiltredArticles,
  setLimit,
  onPage,
}) => {
  const handleInput = e => {
    const query = e.target.value
    if (query === "") {
      navigate("/articles/")
      setQuery("")
      setLimit(onPage)
      return null
    }
    navigate(`/articles/?search=${query.trim()}`)
    setQuery(query)
    setFiltredArticles(filterArticles(allArticles))
    setLimit(onPage)
  }

  return (
    <div className="articles-search">
      <input
        onChange={e => handleInput(e)}
        value={query}
        placeholder="Напишите сюда чтобы отфильтровать статьи"
        type="text"
      />
      <span>{query === "" ? articlesLength : resultsLength}</span>
    </div>
  )
}

export default Search

Search.propTypes = {
  allArticles: PropTypes.array,
  filterArticles: PropTypes.func,
  articlesLength: PropTypes.number,
  resultsLength: PropTypes.number,
  query: PropTypes.string,
  setQuery: PropTypes.func,
  setFiltredArticles: PropTypes.func,
  setLimit: PropTypes.func,
  onPage: PropTypes.number,
}
