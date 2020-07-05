import React from 'react'

const Search = ({ articlesLength }) => {
	const [length, setLength] = React.useState(0)
	React.useEffect(() => {
		setLength(articlesLength)
	}, [articlesLength])
	
	return (
		<div className="articles-search">
			<input placeholder="Напишите сюда чтобы отфильтровать статьи" type="text" />
			<span>{length}</span>
    </div>
	)
}

export default Search