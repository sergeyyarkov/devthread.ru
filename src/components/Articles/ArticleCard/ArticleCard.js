import React from 'react';
import { Link } from 'gatsby'
import './ArticleCard.scss'

const ArticleCard = ({ data: { slug, title, image, category, description, tags } }) => {
  return (
    <article className="article-card">
      <div className="article-card__image">
        <Link to={`/article/${slug}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="article-card__heading">
        <h2><Link to={`/article/${slug}`}>{title}</Link></h2>
      </div>
      <div className="article-card__category">
        <Link to={`/category/${category}`}>{category}</Link>
      </div>
      <div className="article-card__tags">
        <ul>
          {tags.map((tag, i) => <li key={i}><Link to={`/tag/${tag}`}>{tag}</Link></li>)}
        </ul>
      </div>
      <div className="article-card__description">
        <p>
          {description}
        </p>
      </div>
    </article>
  )
}

export default ArticleCard