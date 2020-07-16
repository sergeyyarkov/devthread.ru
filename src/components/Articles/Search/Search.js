import React from 'react'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'

const Search = ({ allArticles, filterArticles, articlesLength, resultsLength, query, setQuery, setFiltredArticles, setLimit }) => {
	const handleInput = e => {
		const query = e.target.value
		if (query === '') {
			navigate('/articles/')
			setQuery('')
			return null
		}
		navigate(`/articles/?search=${query.trim()}`)
		setQuery(query)
		setFiltredArticles(filterArticles(allArticles))
		setLimit(6)
	}

	return (
		<div className="articles-search">
			<input onChange={e => handleInput(e)} value={query} placeholder="Напишите сюда чтобы отфильтровать статьи" type="text" />
			<span>{query === '' ? articlesLength : resultsLength}</span>
    </div>
	)	
}

export default Search

Search.propTypes = {
	articlesLength: PropTypes.number
}