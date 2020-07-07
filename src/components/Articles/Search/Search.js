import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ articlesLength }) => {
	return (
		<div className="articles-search">
			<input placeholder="Напишите сюда чтобы отфильтровать статьи" type="text" />
			<span>{articlesLength}</span>
    </div>
	)
}

export default Search

Search.propTypes = {
	articlesLength: PropTypes.number
}