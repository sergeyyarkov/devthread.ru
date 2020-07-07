import React from 'react';
import usePopularArticlesQuery from '../../hooks/usePopularArticlesQuery'
import useTagsQuery from '../../hooks/useTagsQuery'
import './Offers.scss'
import Popular from './Popular/Popular'
import PopularItem from './Popular/PopularItem'
import Tags from './Tags/Tags'
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
      <div className="offers-subscription offer-box">
        <div className="offers-subscription__heading offer-heading">
           Читайте нас в Telegram
        </div>
        <div className="offers-subscription__content">
          <p>
            В нашем канале telegram вы не пропустите новые статьи, присоединяйтесь к другим разработчикам
          </p>
          <a href="https://t.me/devthread" rel='noreferrer' target="_blank" className="btn-primary">Подписаться</a>
        </div>
      </div>
    </div>
  )
}

export default Offers