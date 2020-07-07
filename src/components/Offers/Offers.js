import React from 'react';
import usePopularArticlesQuery from '../../hooks/usePopularArticlesQuery'
import useTagsQuery from '../../hooks/useTagsQuery'
import './Offers.scss'
import Popular from './Popular/Popular'
import Tags from './Tags/Tags'
import Subscription from './Subscription/Subscription'

import PopularItem from './Popular/PopularItem'
import TagItem from './Tags/TagItem'

import BooksIcon from '../../images/books-icon.svg'

const Offers = () => {
  const { articles } = usePopularArticlesQuery()
  const { tags } = useTagsQuery()

  return (
    <div className="offers">
      <Popular>
        {articles.map(({ node }, i) => <PopularItem key={i} slug={node.frontmatter.slug} title={node.frontmatter.title} />)}
      </Popular>
      <Tags>
        {tags.map(({ node }, i) => <TagItem key={i} title={node.frontmatter.title} />)}
      </Tags>
      <div className="offers-books offer-box">
        <div className="offers-books__heading offer-heading">
          <BooksIcon />
          Что почитать
        </div>
        <div className="offers-books__content">
          {[1,2,3,4,5].map(e => <div key={e} className="book-item">
            <a href="/">Lorem ipsum dolor sit amet, consectetur.</a>
          </div>)}
        </div>
      </div>
      <Subscription />
    </div>
  )
}

export default Offers