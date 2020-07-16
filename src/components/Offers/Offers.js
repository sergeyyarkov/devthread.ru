import React from 'react';
import { useLocation } from '@reach/router'
import usePopularArticlesQuery from '../../hooks/usePopularArticlesQuery'
import useTagsQuery from '../../hooks/useTagsQuery'
import useBooksQuery from '../../hooks/useBooksQuery'
import Popular from './Popular/Popular'
import Tags from './Tags/Tags'
import Books from './Books/Books'
import Subscription from './Subscription/Subscription'

import PopularItem from './Popular/PopularItem'
import TagItem from './Tags/TagItem'
import BookItem from './Books/BookItem'

const Offers = () => {
  const { pathname } = useLocation()
  const { articles } = usePopularArticlesQuery()
  const { tags } = useTagsQuery()
  const { books } = useBooksQuery()
  
  return (
    <div style={{ height: pathname === '/' ? '78%' : '78.5%' }} className="offers">
      <Popular>
        {articles.map(({ node }, i) => <PopularItem key={i} slug={node.frontmatter.slug} title={node.frontmatter.title} />)}
      </Popular>
      <Tags>
        {tags.map(({ node }, i) => <TagItem key={i} title={node.frontmatter.title} />)}
      </Tags>
      <Books>
        {books.map(({ node }, i) => <BookItem key={i} title={node.frontmatter.title} />)}
      </Books>
      <Subscription />
    </div>
  )
}

export default Offers