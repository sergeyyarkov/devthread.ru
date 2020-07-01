import React from 'react';
import './ArticleCard.scss'

const ArticleCard = ({ data }) => {
  return (
    <article className="article-card">
      <div className="article-card__image">
        <a href="/">
          <img src="https://c.wallhere.com/photos/fb/a1/JavaScript_minimalism-1227036.jpg!d" alt="article" />
        </a>
      </div>
      <div className="article-card__heading">
        <h2><a href="/">Lorem ipsum dolor sit amet, consectetur.</a></h2>
      </div>
      <div className="article-card__category">
        <a href="/">Javascript</a>
      </div>
      <div className="article-card__tags">
        <ul>
          <li><a href="/">graphql</a></li>
          <li><a href="/">netlify</a></li>
          <li><a href="/">tutorial</a></li>
          <li><a href="/">serverless</a></li>
        </ul>
      </div>
      <div className="article-card__description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non autem hoc: igitur ne illud quidem. Uterque enim summo bono fruitur, id est voluptate. Hoc tu nunc in illo probas
        </p>
      </div>
    </article>
  )
}

export default ArticleCard