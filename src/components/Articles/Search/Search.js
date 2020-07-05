import React from 'react'

const Search = ({ articlesLength }) => {
	return (
		<div className="articles-search">
			<input placeholder="Напишите сюда чтобы отфильтровать статьи" type="text" />
			<span>{articlesLength}</span>
    </div>
	)
}

export default Search